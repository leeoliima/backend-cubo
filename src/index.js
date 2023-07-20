"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserDatabase_1 = require("./data/UserDatabase");
const UserController_1 = require("./controller/UserController");
const app = (0, express_1.default)();
const userDatabase = new UserDatabase_1.UserDatabase();
const userController = new UserController_1.UserController(userDatabase);
app.use(express_1.default.json()); // Adicione esse middleware para analisar o corpo da solicitação como JSON
app.listen(3003, "localhost", () => {
    console.log("Servidor rodando em http://localhost:3003");
});
app.get("/ping", (req, res) => {
    res.send("pong");
});
app.post("/create", userController.createUser);
app.get("/users", userController.getAllUsers);
// Middleware para tratamento de erros
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
});
