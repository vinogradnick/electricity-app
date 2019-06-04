export interface ITransformer{
    id:number;
    name:ITransformerModel;
    type:ITransformerType;
    dateInstallation:Date;
    dateCheck:Date;
}
export interface ITransformerType{
    id:number;
    name:string;
}
export interface ITransformerModel{
    id:number;
    name:string;
}