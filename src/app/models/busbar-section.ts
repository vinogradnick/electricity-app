import { Workload } from './workload';

export interface IBusbarSection {
    id?:number,
    name:string,
    value:number,
    workload?:Workload
}
export class BusbarSection implements IBusbarSection{
    id?: number;    
    name: string;
    value: number;
    workload?: Workload;


}
