import { Component, OnInit } from '@angular/core';
import { Tp } from 'src/app/models/tp';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute } from '@angular/router';
import { TpServiceService } from '../../tp-service.service';

@Component({
  selector: 'app-tp-change',
  templateUrl: './tp-change.component.html',
  styleUrls: ['./tp-change.component.scss']
})
export class TpChangeComponent implements OnInit {
  tp:Tp={id:0,name:"",voltage:0,power:0,geocode:"",transformer:{id:0,name:'',dateCheck:new Date(),dateInstallation:new Date(),type:''}}

  constructor(private ts:TpServiceService,private ar:ActivatedRoute) {
    let id =this.ar.params.subscribe(el => id = el['id']);
    ts.getModel(id).subscribe(el=>this.tp=el);
    
   }

  ngOnInit() {
  }
  onSubmit(){
    this.ts.update(this.tp.id,this.tp);
  
  }

}
