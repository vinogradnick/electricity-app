import { ElectroObject } from './electro-object';
import { Tp } from './tp';

export interface Fider extends ElectroObject {
    tps?:Array<Tp>
}
