import { ElectroObject } from './electro-object';
import { Customer } from './customer';
import { Counter } from './counter';

export interface Line extends ElectroObject {
    customers?:Array<Customer>;
    counter?:Counter;
}
