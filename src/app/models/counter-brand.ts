export interface ICounterBrand{
    id?:number;
    name:string;
}
export class CounterBrand implements ICounterBrand{
    id?: number;
    name: string;
    constructor(){
      this.id=0;
      this.name='';
    }

}
