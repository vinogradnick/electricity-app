import { Counter } from './counter';
import { IFider } from './fider';

export interface ElectroObject {
    id?:number,
    name:string,
    voltage:number,
    power:number,
    geocode:string,
    
}
export interface IElectroReview extends ElectroObject{
    type:string;
}
export class ElectroReview implements ElectroObject{
    id?: number;    
    name: string;
    voltage: number;
    power: number;
    geocode: string;
    constructor(){
        
    }
   
}
