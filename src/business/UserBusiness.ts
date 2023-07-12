import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";

export class UserBusiness {
  constructor(private userDatabase: UserDatabase) {}

  public async createUser(input: User): Promise<void> {
    const { id, first_name, last_name, participation } = input;
    const newUser = new User(id, first_name, last_name, participation);
    await this.userDatabase.createUser(newUser);
  }

  public async getParticipants(): Promise<User[]> {
    return await this.userDatabase.getAllUsers();
  }
}
