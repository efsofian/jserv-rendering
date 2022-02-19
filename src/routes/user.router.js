import express from "express";
import passport from "passport";
import { auth } from "../middlewares/helpers";
const router = express.Router();

router.get("/userslist", (req, res) => {
	const resu = [
		{
			id: 1,
			name: "Pete Bac",
		},
		{
			id: 2,
			name: "Ervin Howell",
		},
		{
			id: 3,
			name: "Clementine Bauch",
		},
		{
			id: 4,
			name: "Patricia Lebsack",
		},
		{
			id: 5,
			name: "Chelsey Dietrich",
		},
	];
	res.send(resu);
});

router.get("/adminslist", auth, (req, res) => {
	const resu = [
		{
			id: 1,
			name: "Admin Pete Bac",
		},
		{
			id: 2,
			name: "Admin Ervin Howell",
		},
		{
			id: 3,
			name: "Admin Clementine Bauch",
		},
		{
			id: 4,
			name: "Admin Patricia Lebsack",
		},
		{
			id: 5,
			name: "Admin Chelsey Dietrich",
		},
	];
	res.send(resu);
});

export default router;
