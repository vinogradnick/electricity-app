import { Component, OnInit } from '@angular/core';
import { Fider } from 'src/app/models/fider';
import { Counter } from 'src/app/models/counter';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute } from '@angular/router';
import { FiderServiceService } from '../../fider-service.service';

@Component({
  selector: 'app-fider-change',
  templateUrl: './fider-change.component.html',
  styleUrls: ['./fider-change.component.scss']
})
export class FiderChangeComponent implements OnInit {
  fider:Fider={id:0,name:"",voltage:0,power:100,geocode:""}
  constructor(

   private fs:FiderServiceService,
   private ar:ActivatedRoute
  ) {
    let id = this.ar.params.subscribe(el => id = el['id']);
    let fider:Fider;
     fs.getModel(id).subscribe(el=>fider=el);
    if (fider != undefined || fider != null) {
      this.fider = fider;
    }
   }

  ngOnInit() {
  }
  onSubmit(){
    this.fs.update(this.fider.id,this.fider);
  }

}
