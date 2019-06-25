export interface IUser{
    id:number;
    name:string;
    password:string;
    role:string;
    accessLevel:number;
}
export class User implements IUser{
    id: number;    
    name: string;
    password: string;
    role: string;
    accessLevel: number;


}