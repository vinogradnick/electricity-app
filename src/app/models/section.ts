import { ElectroObject } from './electro-object';
import { Line } from './line';
import { Counter } from './counter';

export interface Section extends ElectroObject {
    lines?:Array<Line>;
    counter?:Counter;
}
