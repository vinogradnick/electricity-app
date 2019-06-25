import { ElectroObject } from './electro-object';
import { Section } from './section';
import { ITransformer } from './transformer';

export interface ITp extends ElectroObject {
    sections?: Array<Section>;
    transformer?: ITransformer;
}
export class Tp implements ITp {
    sections?: Section[];
    transformer?: ITransformer;
    id?: number;
    name: string;
    voltage: number;
    power: number;
    geocode: string;
    fiderId?:number;
    constructor() {
        this.id = 0;
        this.name = '';
        this.voltage = 0;
        this.power = 0;
        this.geocode = '';
        this.sections = [];
        this.transformer = {id: 0, name: '', model: {name: ''}, dateInstallation: new Date(), dateCheck: new Date(), type: {name: ''}};
        this.fiderId=0;
    }


}
