import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss']
})
export class CreateAdminComponent implements OnInit {

  user:IUser={id:0,name:"",password:"",role:'',accessLevel:0};
  constructor() { }

  ngOnInit() {
  }

}
