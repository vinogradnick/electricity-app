import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/models/line';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute } from '@angular/router';
import { LineServiceService } from '../../line-service.service';

@Component({
  selector: 'app-line-change',
  templateUrl: './line-change.component.html',
  styleUrls: ['./line-change.component.scss']
})
export class LineChangeComponent implements OnInit {
  line:Line={id:0,name:'',voltage:0,power:0,geocode:"",counter:{id:0,brand:{id:0,name:''},dateLastCheck:new Date(),date:new Date()}};
  constructor(
    private ls:LineServiceService,
    private ar:ActivatedRoute
  ) {
    let sect: Line;
    let id = this.ar.params.subscribe(el => id = el['id']);
    ls.getModel(id).subscribe(el=>sect=el);
    if (sect != undefined || sect != null) {
      this.line = sect;
    }
   }

  ngOnInit() {
  }
  onSubmit(){
    this.ls.update(this.line.id,this.line);
  }


}
