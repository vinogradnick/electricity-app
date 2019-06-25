import { Tp } from './tp';
import { Section } from './section';
import { BusbarSection } from './busbar-section';
import { Phase } from './phase';

export interface IWorkload {
    id?:number,
    name:string,
    date:Date
    tp?:Tp,
    busbarSections?:Array<BusbarSection>,
    phases?:Array<Phase>
}

export class Workload implements IWorkload{
    id?: number;    name: string;
    date: Date;
    tp?: Tp;
    busbarSections?: BusbarSection[];
    phases?: Phase[];


}