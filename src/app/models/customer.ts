import { Counter } from './counter';
import { Fider } from './fider';
import { Tp } from './tp';
import { Line } from './line';

export interface ICustomer {
    id?:number,
    name:string,
    objectName:string,
    objectAddress:string,
    placeInstall:string,
  lineId?: number;
    status:boolean
    counter?:Counter
    }
export class Customer implements ICustomer{
    id?: number;    name: string;
    objectName: string;
    objectAddress: string;
    placeInstall: string;
    lineId?: number;
    status: boolean;
    counter?: Counter;



}
