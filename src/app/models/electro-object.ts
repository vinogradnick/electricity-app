import { Counter } from './counter';

export interface ElectroObject {
    id:number,
    name:string,
    voltage:number,
    power:number,
    geocode:string,
    
}
export interface IElectroReview extends ElectroObject{
    type:string;
}
