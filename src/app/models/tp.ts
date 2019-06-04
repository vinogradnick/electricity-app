import { ElectroObject } from './electro-object';
import { Section } from './section';
import { ITransformer } from './transformer';

export interface Tp extends ElectroObject {
    sections?:Array<Section>,
    transformer?:ITransformer
}
