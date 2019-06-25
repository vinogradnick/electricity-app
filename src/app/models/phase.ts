import { Workload } from './workload';
import {IPhaseValue} from './phaseValue';

export interface IPhase {
    id?:number,
    name:string,
    values:IPhaseValue[],
    sectionValue:number,
    workload?:Workload
}
export class Phase implements IPhase{
    id?: number;
    name: string;
    values: IPhaseValue[];
    sectionValue: number;
    workload?: Workload;


}
