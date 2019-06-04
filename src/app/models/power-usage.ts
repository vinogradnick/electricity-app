import { Customer } from './customer';

export interface PowerUsage {
    id:number,
    value:number,
    customer?:Customer
}
