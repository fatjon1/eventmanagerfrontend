import { Role } from "./role.interface";


export interface User{
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    roles: Role[];
}