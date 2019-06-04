import { Counter } from './counter';
import { Fider } from './fider';
import { Tp } from './tp';
import { Line } from './line';

export interface Customer {
    id:number,
    
    name:string,
    objectName:string,
    objectAddress:string,
    placeInstall:string,
    fiderNumber:number,
    lineNumber:number,
    tpNumber:number,
    status:boolean
    counter?:Counter
    fider?:Fider,
    tp?:Tp,
    line?:Line
}
