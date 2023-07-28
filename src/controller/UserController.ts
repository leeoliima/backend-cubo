import { Request, Response, NextFunction } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO } from "../model/userDTO";
import { User } from "../model/User";

export class UserController {
  private userBusiness: UserBusiness;

  constructor(userDatabase: UserDatabase) {
    this.userBusiness = new UserBusiness(userDatabase);
  }

  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { firstName, lastName, participation } = req.body as UserDTO;

      if (!firstName) {
        res.status(400).json({ message: "O campo 'firstName' é obrigatório." });
        return;
      }

      const newUser = new User(firstName, lastName, participation);
      await this.userBusiness.createUser(newUser);
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      next(error);
    }
  };

  public getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const users = await this.userBusiness.getUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };
}
