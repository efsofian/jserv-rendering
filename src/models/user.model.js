import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	googleId: String,
	credits: {
		type: Number,
		default: 0,
	},
});

export default mongoose.model("users", userSchema);
