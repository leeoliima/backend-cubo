"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const UserBusiness_1 = require("../business/UserBusiness");
const UserController_1 = require("../controller/UserController");
const UserDatabase_1 = require("../data/UserDatabase");
exports.userRouter = express_1.default.Router();
const userDatabase = new UserDatabase_1.UserDatabase();
const userBusiness = new UserBusiness_1.UserBusiness(userDatabase);
const userController = new UserController_1.UserController(userDatabase);
exports.userRouter.post('/users', userController.createUser);
exports.userRouter.get('/users', userController.getAllUsers);
