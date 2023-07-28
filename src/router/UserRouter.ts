import express from "express";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";

export const userRouter = express.Router();
const userController = new UserController(new UserDatabase());

userRouter.post("/create", userController.createUser);
userRouter.get("/users", userController.getAllUsers);
