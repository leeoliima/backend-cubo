import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";

export class UserBusiness {
  constructor(private userDatabase: UserDatabase) {}

  public async createUser(input: User): Promise<void> {
    await this.userDatabase.createUser(input);
  }

  public async getParticipants(): Promise<User[]> {
    return await this.userDatabase.getAllUsers();
  }
}
