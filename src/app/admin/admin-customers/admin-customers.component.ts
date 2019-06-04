import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.scss']
})
export class AdminCustomersComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Name','Password', 'Role','AccessLevel'];
  dataSource: MatTableDataSource<IUser>;
  

  constructor() {
    this.dataSource=new MatTableDataSource(this.loadData());
   }

  ngOnInit() {
    
   
  }
  loadData():IUser[]{
    let users:IUser[]=[{
      id:1,
      name:"admin",
      password:'admin',
      role:'admin',
      accessLevel:9
    }];
    return users;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selectUser(user:IUser){
    console.log(user);
  }

}
