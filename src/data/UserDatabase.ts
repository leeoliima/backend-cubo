import { User } from "../model/User";
import BaseDataBase from "../data/BaseDatabase";

export class UserDatabase {
  async createUser(user: User): Promise<void> {
    try {
      await BaseDataBase.connection
        .insert({
          first_name: user.getFirstName(),
          last_name: user.getLastName(),
          participation: user.getParticipation(),
        })
        .into("users");
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const result = await BaseDataBase.connection.raw(`
        SELECT * from users
      `);
      return result[0].map(
        (res: {
          first_name: string;
          last_name: string;
          participation: string;
        }) => {
          return new User(
            res.first_name,
            res.last_name,
            parseFloat(res.participation)
          );
        }
      );
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
