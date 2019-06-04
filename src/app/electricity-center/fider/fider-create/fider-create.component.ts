import { Component, OnInit } from '@angular/core';
import { Fider } from 'src/app/models/fider';
import { ElectricityService } from '../../electricity.service';
import { Counter } from 'src/app/models/counter';
import { FiderServiceService } from '../../fider-service.service';

@Component({
  selector: 'app-fider-create',
  templateUrl: './fider-create.component.html',
  styleUrls: ['./fider-create.component.scss']
})
export class FiderCreateComponent implements OnInit {
  fider:Fider={id:0,name:"",voltage:0,power:100,geocode:""}
  constructor(private fs:FiderServiceService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.fs.create(this.fider);
  }
}
