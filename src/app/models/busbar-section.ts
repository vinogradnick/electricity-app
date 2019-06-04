import { Workload } from './workload';

export interface BusbarSection {
    id:number,
    name:string,
    value:number,
    workload?:Workload
}
