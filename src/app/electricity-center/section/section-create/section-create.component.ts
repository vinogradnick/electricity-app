import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/models/section';
import { ElectricityService } from '../../electricity.service';
import { SectionServiceService } from '../../section-service.service';

@Component({
  selector: 'app-section-create',
  templateUrl: './section-create.component.html',
  styleUrls: ['./section-create.component.scss']
})
export class SectionCreateComponent implements OnInit {
  section:Section={id:0,name:'',voltage:0,power:0,geocode:'',counter:{id:0,brand:{id:0,name:''},date:new Date(),dateLastCheck:new Date()}};

  constructor(
    private ss:SectionServiceService,
    
    ) { }

  ngOnInit() {
  }
  onSubmit(){
    this.ss.create(this.section);
  }

}
