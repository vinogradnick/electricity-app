import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface ITableModel {
  Id: number;
  Name: string;
  DisplayName: string;
  Labels: Array<IViewLabel>;
  Boxes: Array<IRequestBox>;
  isSelected: boolean;
}
export interface IViewLabel {
  Name: string;
  Select: boolean;
}
export interface IRequestBox {
  Id: number;
  Name: string;
  Operator: string;
  Value: string;
  Selection: boolean;
}


@Component({
  selector: 'app-request-constructor',
  templateUrl: './request-constructor.component.html',
  styleUrls: ['./request-constructor.component.scss']
})
export class RequestConstructorComponent implements OnInit {

  selectedTables: ITableModel[] = [];
  selectedObjects: IRequestBox[] = [];
  requestBoxTable: IRequestBox[] = [
    {
      Id: 1, Name: "Id", Operator: "", Value: "", Selection: false
    },
    {
      Id: 1, Name: "Name", Operator: "", Value: "", Selection: false
    }
  ];
  tableList: ITableModel[] = [
    {
      Id: 0,
      Name: "Fider",
      DisplayName: "Фидер",
      isSelected: false,
      Labels: [{
        Name: "Id", Select: false
      }],
      Boxes: [{
        Id: 1,
        Name: "Id",
        Operator: "",
        Value: "",
        Selection: false

      }]
    },
    {
      Id: 1,
      Name: "Tp",
      DisplayName: "ТП",
      isSelected: false,
      Labels: [{
        Name: "Id", Select: false
      }],
      Boxes: [{
        Id: 1,
        Name: "Id",
        Operator: "",
        Value: "",
        Selection: false

      }]
    }
  ];
  displayedColumns: string[] = ["Selection", 'Id', 'Name', 'Operator', 'Value'];

  constructor() { }

  ngOnInit() {
  }


  dataSource = new MatTableDataSource<IRequestBox>(this.requestBoxTable);
  selection = new SelectionModel<IRequestBox>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IRequestBox): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    row.Selection = !row.Selection;
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id + 1}`;
  }
  selectTable(table: ITableModel) {
    if (table.isSelected) {
      this.selectedTables.splice(table.Id, 1);
      table.isSelected = false;
    }
    else {
      if (!this.selectedTables.find(td => td.Id == table.Id)) {
        this.selectedTables.push(table);
        table.isSelected = true;
      }

    }
    console.log(this.selectedTables);

  }

}
