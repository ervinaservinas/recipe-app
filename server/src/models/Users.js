import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  user: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = mongoose.model("Users", UserSchema);
