import {Customer} from './customer';

export interface IPowerUsage {
  id: number,
  value: number,
  customer?: Customer
}

export class PowerUsage implements IPowerUsage {
  id: number;
  value: number;
  customer?: Customer;
  period: number;
  date:Date


}
