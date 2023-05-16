import { Film } from "./film";
import { User } from "./user";

export class Ticket {
    id?:number;
    prix:number;
    film:Film;
    user:User;
  
}
