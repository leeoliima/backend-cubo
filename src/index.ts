import express, { Request, Response } from "express";

import { UserDatabase } from "./data/UserDatabase";
import { User } from "./model/User";

const app = express();
const userDatabase = new UserDatabase();

// Adicione o middleware express.json() para analisar o corpo da solicitação como JSON
app.use(express.json());

app.listen(3003, "localhost", () => {
  console.log("Servidor rodando em http://localhost:3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.post("/create", async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, participation } = req.body;

    const user = new User(firstName, lastName, participation);
    // Atribuindo os valores usando os métodos setters

    user.setFirstName(firstName);
    user.setLastName(lastName);
    user.setParticipation(participation);

    await userDatabase.createUser(user);
    res.send("Usuário criado com sucesso!");
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await userDatabase.getAllUsers();
    res.send(users);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});
