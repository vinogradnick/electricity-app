import {Component, OnInit} from '@angular/core';
import {Section} from 'src/app/models/section';
import {ElectricityService} from '../../electricity.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceService} from '../../section-service.service';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-section-change',
  templateUrl: './section-change.component.html',
  styleUrls: ['./section-change.component.scss']
})
export class SectionChangeComponent implements OnInit {
  section: Section = {
    id: 0,
    name: '',
    voltage: 0,
    power: 0,
    geocode: '',
    counter: {id: 0, name: '', brand: {id: 0, name: ''}, date: new Date(), dateLastCheck: new Date()}
  };

  constructor(
    private ss: SectionServiceService,
    private ar: ActivatedRoute,
    private router:Router
  ) {


  }

  ngOnInit() {
    let id;
    this.ar.params.subscribe(el => id = el['id']);
    this.ss.getModel(id).subscribe(el => this.section = el);
  }

  onSubmit() {
    this.ss.update(this.section.id, this.section);
    this.back();
  }

  back() {
    setTimeout(()=>{
      this.router.navigate(['/electro/view']);
    },DELAY);
  }
}
