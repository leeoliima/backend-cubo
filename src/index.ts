import express, { Request, Response, NextFunction } from "express";
import { UserDatabase } from "./data/UserDatabase";
import { UserController } from "./controller/UserController";

const app = express();
const userDatabase = new UserDatabase();
const userController = new UserController(userDatabase);

app.use(express.json()); // Adicione esse middleware para analisar o corpo da solicitação como JSON

app.listen(3003, "localhost", () => {
  console.log("Servidor rodando em http://localhost:3003");
});

app.get("https://backend-cubo.onrender.com/users/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.post("https://backend-cubo.onrender.com/users/create", userController.createUser);

app.get("https://backend-cubo.onrender.com/users/users", userController.getAllUsers);

// Middleware para tratamento de erros
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong.' });
});
