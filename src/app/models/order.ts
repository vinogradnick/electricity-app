interface IOrder{
    id:number;
    name:string;
    message:string;
    type:string;
    dateStart:Date;
    status:string;
    dateClose?:Date;
    electroObject:{id:number,type:string};
}