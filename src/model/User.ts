export class User {
  constructor(
    public first_name: string,
    public last_name: string,
    public participation: number
  ) {}

  getFirstName(): string {
    return this.first_name;
  }

  setFirstName(firstName: string): void {
    this.first_name = firstName;
  }

  getLastName(): string {
    return this.last_name;
  }

  setLastName(lastName: string): void {
    this.last_name = lastName;
  }

  getParticipation(): number {
    return this.participation;
  }

  setParticipation(participation: number): void {
    this.participation = participation;
  }
}
