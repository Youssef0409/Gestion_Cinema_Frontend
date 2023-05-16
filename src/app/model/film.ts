import { Salle } from "./salle";

export class Film {
    id:number;
    titre:string;
    createur:string;
    nbr_ticket:number;
    duree:string;
    prix:number;
    heureProjection:string;
    genre:string;
    salle:Salle;



}
