import { ElectroObject } from './electro-object';
import { Tp } from './tp';

export interface IFider extends ElectroObject {
    tps?:Array<Tp>
}
export class Fider implements IFider{
    public type;
    tps?: Tp[];
    id?: number;
    name: string;
    voltage: number;
    power: number;
    geocode: string;
    constructor(){
        this.id=0;
        this.name='';
        this.voltage=0;
        this.power=0;
        this.geocode='';
        this.tps=[];
        this.type='fiders';
    }
}