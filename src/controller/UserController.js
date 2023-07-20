"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserBusiness_1 = require("../business/UserBusiness");
const User_1 = require("../model/User");
class UserController {
    constructor(userDatabase) {
        this.createUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { firstName, lastName, participation } = req.body;
                if (!firstName) {
                    res.status(400).json({ message: "O campo 'firstName' é obrigatório." });
                    return;
                }
                const newUser = new User_1.User(firstName, lastName, participation);
                yield this.userBusiness.createUser(newUser);
                res.status(201).json({ message: 'User created successfully' });
            }
            catch (error) {
                next(error);
            }
        });
        this.getAllUsers = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userBusiness.getUsers();
                res.status(200).json(users);
            }
            catch (error) {
                next(error);
            }
        });
        this.userBusiness = new UserBusiness_1.UserBusiness(userDatabase);
    }
}
exports.UserController = UserController;
