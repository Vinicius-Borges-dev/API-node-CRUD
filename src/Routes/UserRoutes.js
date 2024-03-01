import express from "express";
import userController from "../Controller/userController.js";

const userRoutes = express.Router();

const UserController = new userController();

userRoutes.post("/api/Register", UserController.createUser);

export default userRoutes;
