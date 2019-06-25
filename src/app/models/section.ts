import { ElectroObject } from './electro-object';
import { Line } from './line';
import { Counter } from './counter';

export interface ISection extends ElectroObject {
    lines?:Array<Line>;
    counter?:Counter;
}
export class Section implements ISection{
    lines?: Line[];    counter?: Counter;
    id?: number;
    name: string;
    voltage: number;
    power: number;
    geocode: string;
    tpId?:number;

  constructor(){
    this.id=0;
    this.name='';
    this.voltage=0;
    this.power=0;
    this.geocode='';
    this.tpId=0;
    this.lines=[];
    this.counter=new Counter();
  }

}

