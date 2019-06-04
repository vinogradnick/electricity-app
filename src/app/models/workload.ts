import { Tp } from './tp';
import { Section } from './section';
import { BusbarSection } from './busbar-section';
import { Phase } from './phase';

export interface Workload {
    id:number,
    name:string,
    date:Date
    tp?:Tp,
    busbarSections?:Array<BusbarSection>,
    phases?:Array<Phase>
}
