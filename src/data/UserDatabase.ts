import { User } from "../model/User";
import BaseDataBase from "../data/BaseDatabase";

export class UserDatabase {
   public async createUser(user: User): Promise<void> {
      
      try {
         await BaseDataBase.connection.raw(`
            INSERT INTO (users) (id, fisrt_name, last_name, participation)
            VALUES (
            '${user.getId()}', 
            '${user.firstName()}', 
            '${user.lastName()}',
            '${user.participations()}'            
            )`
         );
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   public async getAllUsers(): Promise<User[]> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from users
         `);
         return result[0].map((res: any) => {
            return new User(
               res.id,
               res.first_name,
               res.last_name,
               res.participation,               
            );
         });
      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message);
      }
   }
}
