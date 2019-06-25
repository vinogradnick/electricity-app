import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import {Table} from './Table';
import {Tables} from './Tables';
import {IRequestBox} from './IRequestBox';
import {ConstructorService} from './constructor.service';
import {IViewLabel} from './IViewLabel';
import {ExcelService} from '../../excel.service';



@Component({
  selector: 'app-request-constructor',
  templateUrl: './request-constructor.component.html',
  styleUrls: ['./request-constructor.component.scss']
})
export class RequestConstructorComponent implements OnInit {

  selectedTable: Table;
  result:any[]=[];
  display_names:string[]=[];
  displayed:string[]=[];
  tableList:Table[];
  displayedColumns: string[] = ["selection", 'id', 'name', 'operator', 'value'];

  constructor(private cs:ConstructorService,private ex:ExcelService
  ) {
    this.tableList=Tables;
  }

  ngOnInit() {
  }
  dataSource: MatTableDataSource<IRequestBox>;
  selection = new SelectionModel<IRequestBox>(true, []);


  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IRequestBox): string {

    row.selection = !row.selection;
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  postData(){
    this.cs.postData(this.selectedTable).subscribe(el=>{
      this.result=el;
      this.displayed=this.selectedTable.labels.filter(el=>el.select).map(el=>el.name);
      this.display_names=this.selectedTable.labels.filter(el=>el.select).map(el=>el.disp);
    });

  }
  exportToExcel(){
    // @ts-ignore
    this.ex.generateDataSet(this.selectedTable.name,this.result,"Результат запроса");
  }

}
