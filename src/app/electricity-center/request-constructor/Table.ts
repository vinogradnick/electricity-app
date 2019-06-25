import {IRequestBox} from './IRequestBox';
import {IViewLabel} from './IViewLabel';

export class Table {
  static id: number;
  id: number;
  name: string;
  display_name: string;
  labels: IViewLabel[];
  boxes: IRequestBox[];
  is_selected: boolean;

  constructor(name, disp, boxes: IRequestBox[]) {
    this.name = name;
    this.id = Table.id++;
    this.display_name = disp;
    this.labels = boxes.map(el=>{
      return {name:el.name, disp:el.disp,select:el.selection}
    });
    this.boxes = boxes;
    this.is_selected = false;
  }
}
