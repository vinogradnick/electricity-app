import { ElectroObject } from './electro-object';
import { Customer } from './customer';
import { Counter } from './counter';

export interface ILine extends ElectroObject {
    customers?:Array<Customer>;

}

export class Line implements ILine{
    customers?: Customer[];    counter?: Counter;
    id?: number;
    name: string;
    voltage: number;
    power: number;
    geocode: string;
    sectionId?:number;
  constructor(){
    this.id=0;
    this.name='';
    this.voltage=0;
    this.power=0;
    this.geocode='';

    this.customers=[];

  }

}
