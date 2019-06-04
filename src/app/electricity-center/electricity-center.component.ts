import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electricity-center',
  templateUrl: './electricity-center.component.html',
  styleUrls: ['./electricity-center.component.scss']
})
export class ElectricityCenterComponent implements OnInit {
  isOpenedSidebar:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  test(){
    console.log("i am works");
  }

}
