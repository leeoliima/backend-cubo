import { Request, Response } from 'express';
import { User } from '../model/User';
import { UserDatabase } from '../data/UserDatabase';
import { UserBusiness } from '../business/UserBusiness';

export class UserController {
  private userBusiness: UserBusiness;

  constructor(userDatabase: UserDatabase) {
    this.userBusiness = new UserBusiness(userDatabase);
  }

  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { first_name, last_name, participation } = req.body;
  
      // Verificar se o campo first_name não está vazio
      if (!first_name) {
        res.status(400).json({ message: "O campo 'first_name' é obrigatório." });
        return; // Retornar aqui para encerrar a execução da função
      }
  
      const newUser = new User(first_name, last_name, participation);
      await this.userBusiness.createUser(newUser);
      res.status(201).json({ message: 'User created successfully' });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
  

  public getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await this.userBusiness.getParticipants();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}
