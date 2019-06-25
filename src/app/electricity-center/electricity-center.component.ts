import { Component, OnInit } from '@angular/core';
import { ElectricityAuthService } from './electricity-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electricity-center',
  templateUrl: './electricity-center.component.html',
  styleUrls: ['./electricity-center.component.scss']
})
export class ElectricityCenterComponent implements OnInit {
  isOpenedSidebar: boolean = false;
  userName: string;
  role: string;
  constructor(private auth: ElectricityAuthService,private router:Router ) { }

  ngOnInit() {
  }
  test() {
    console.log("i am works");
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
    
  }


}
