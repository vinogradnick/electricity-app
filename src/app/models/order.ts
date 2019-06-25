export interface IOrder{
    id?:number;
    name:string;
    message:string;
    type?:IOrderType;
    dateStart:Date;
    status:string;
    dateClose?:Date;
    electroObject:{type:string};
}
export interface IOrderType{
    id?:number;
    name:string;
}
export class Order implements IOrder{
    id?: number;    
    name: string;
    message: string;
    type?: IOrderType;
    dateStart: Date;
    status: string;
    dateClose?: Date;
    electroObject: { type: string; };

    
}