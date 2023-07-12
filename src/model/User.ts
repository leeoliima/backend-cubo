
export class User {
   constructor(
      public id: string,
      public first_name: string,
      public last_name: string,
      public participation: number,      
   ) { }

   public getId(): string {
      return this.id;
   }

   public firstName(): string {
      return this.first_name;
   }

   public lastName(): string {
      return this.last_name;
   }

   public participations(): number {
      return this.participation;   }

 
}
