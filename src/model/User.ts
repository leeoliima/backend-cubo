export class User {
   constructor(
   
     public first_name: string,
     public last_name: string,
     public participation: number
   ) {}
 
  
 
   public getFirstName(): string {
     return this.first_name;
   }
 
   public setFirstName(firstName: string): void {
     this.first_name = firstName;
   }
 
   public getLastName(): string {
     return this.last_name;
   }
 
   public setLastName(lastName: string): void {
     this.last_name = lastName;
   }
 
   public getParticipation(): number {
     return this.participation;
   }
 
   public setParticipation(participation: number): void {
     this.participation = participation;
   }
 }
 