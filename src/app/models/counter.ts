import { CounterBrand } from './counter-brand';

export interface ICounter {
    id?:number;
    name:string;
    brand:CounterBrand;
    date:Date,
    dateLastCheck:Date,
}
export class Counter implements ICounter{
    id?: number;
    name:string;
    brand: CounterBrand;
    date: Date;
    dateLastCheck: Date;
    constructor(){
      this.id=0;
      this.name='';
      this.brand=new CounterBrand();
      this.date=new Date();
      this.dateLastCheck=new Date();
    }
    
}
