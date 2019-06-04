import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/models/section';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute } from '@angular/router';
import { SectionServiceService } from '../../section-service.service';

@Component({
  selector: 'app-section-change',
  templateUrl: './section-change.component.html',
  styleUrls: ['./section-change.component.scss']
})
export class SectionChangeComponent implements OnInit {
  section: Section = { id: 0, name: '', voltage: 0, power: 0, geocode: '', counter: { id: 0, brand: {id:0,name:''}, date: new Date(), dateLastCheck: new Date() } };

  constructor(
    private ss: SectionServiceService,
    private ar: ActivatedRoute,

  ) {
    let sect: Section;
    let id = this.ar.params.subscribe(el => id = el['id']);
   ss.getModel(id).subscribe(el=>sect=el);
    if (sect != undefined || sect != null) {
      this.section = sect;
    }

  }

  ngOnInit() {
  }
  onSubmit() {
    this.ss.update(this.section.id, this.section);
  }

}
