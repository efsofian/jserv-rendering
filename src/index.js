import { config } from "dotenv";
config();
import express from "express";
import passport from "passport";
import cookieSession from "cookie-session";
import proxy from "express-http-proxy";
import morgan from "morgan";
import("./services/passport");
import connect from "./services/db";
import authRouter from "./routes/auth.router";
import userRouter from "./routes/user.router";
import { matchRoutes } from "react-router-dom";
import renderer from "./client/helpers/renderer";
import createStore from "./client/helpers/createStore";
import { routes } from "./client/Routes";

connect();
const app = express();

app.use(morgan("tiny"));
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [process.env.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", proxy("http://localhost:3000"));

app.get("/favicon.ico", (req, res) => res.status(204));
app.use(authRouter);
app.use(userRouter);

app.use(express.static("public"));

app.get("*", async (req, res) => {
	console.log(`inc req : ${req.path}`);
	const store = createStore(req);
	console.log(matchRoutes(routes, req.path));
	const promises = matchRoutes(routes, req.path)
		.map(({ route }) => {
			return route.loadData ? route.loadData(store) : null;
		})
		.map((prom) => {
			if (prom) {
				return new Promise((res, rej) => {
					prom.then(res).catch(res);
				});
			}
		});
	try {
		await Promise.all(promises);
		const content = renderer(req, store);
		if (store.getState().nf) {
			res.status(404);
		}
		res.send(content);
	} catch (e) {
		console.error(e);
		res.status(500).send("server error");
	}
});

app.listen(3000, () => {
	console.log(`listen on 3000`);
});
