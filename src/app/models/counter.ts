import { ICounterBrand } from './counter-brand';

export interface Counter {
    id:number,
    brand:ICounterBrand;
    date:Date,
    dateLastCheck:Date,
}
