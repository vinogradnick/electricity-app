import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { LoginService } from './login.service';
import { ElectricityAuthService } from '../electricity-center/electricity-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:{name:string,password:string}={name:'',password:''};
  constructor(
    private ms:MessageService,
    private ls:ElectricityAuthService,
  ) { 
    ms.debugMessage("her");
  }

  ngOnInit() {
  }
  onSubmit(){
    this.ls.login(this.user.name,this.user.password);
  }

}
