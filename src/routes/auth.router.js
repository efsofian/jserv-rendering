import express from "express";
import passport from "passport";
const router = express.Router();

router.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: ["profile", "email"],
	})
);

router.get(
	"/auth/google/callback",
	passport.authenticate("google"),
	(req, res) => {
		console.log("we are here");
		res.redirect("/");
	}
);

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/");
});

router.get("/current_user", (req, res) => {
	res.send(req.user);
});

export default router;
