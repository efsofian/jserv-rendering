export const auth = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({ error: "you must log in !" });
	}
	next();
};
