export interface ITransformer{
    id?:number;
    name:string;
    model:ITransformerModel;
    type:ITransformerType;
    dateInstallation:Date;
    dateCheck:Date;
}
export interface ITransformerType{
    id?:number;
    name:string;
}
export interface ITransformerModel{
    id?:number;
    name:string;
}
export class Transformer implements ITransformer{
    id?: number;    
    name:string;
    model:ITransformerModel;
    type: ITransformerType;
    dateInstallation: Date;
    dateCheck: Date;

    
}