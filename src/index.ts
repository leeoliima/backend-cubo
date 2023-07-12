import express, { Request, Response } from 'express';
import { UserController } from './controller/UserController';
import { UserDatabase } from './data/UserDatabase';
import { userRouter } from './router/UserRouter';

const app = express();
const userDatabase = new UserDatabase();
const userController = new UserController(userDatabase);


// Configuração das rotas do Express


app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${3003}`)
})

app.use("/users", userRouter)

app.get("/ping", (req:Request,res:Response)=>{
  res.send("pong")
})