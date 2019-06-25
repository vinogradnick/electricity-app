export interface IRecord{
    id?:number;
    value:number;
    validDate:Date;
    counterNumber:number;
}
export class Record implements IRecord{
    id?: number;    
    value: number;
    validDate: Date;
    counterNumber: number;


}