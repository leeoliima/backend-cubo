import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { UserDatabase } from "./data/UserDatabase";
import { UserController } from "./controller/UserController";

const app = express();
const userDatabase = new UserDatabase();
const userController = new UserController(userDatabase);

app.use(cors());

app.use(express.json());

app.listen(3003, () => {
  console.log("Servidor rodando em http://localhost:3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.post("/create", userController.createUser);
app.get("/users", userController.getAllUsers);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(500).json({ message: "Something went wrong." });
});
