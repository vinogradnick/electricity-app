import { Workload } from './workload';

export interface Phase {
    id:number,
    lineName:string,
    values:number[],
    sectionValue:number,
    workload?:Workload
}
