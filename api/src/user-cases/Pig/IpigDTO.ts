import { Users } from "src/entities/user.entity";

export  interface PigDTO{
    id?:string;
    idUser: string;
    name: string;
    user?: Users
}