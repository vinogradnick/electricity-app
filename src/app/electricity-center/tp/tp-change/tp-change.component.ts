import {Component, OnInit} from '@angular/core';
import {Tp} from 'src/app/models/tp';
import {ElectricityService} from '../../electricity.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TpServiceService} from '../../tp-service.service';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-tp-change',
  templateUrl: './tp-change.component.html',
  styleUrls: ['./tp-change.component.scss']
})
export class TpChangeComponent implements OnInit {
  tp: Tp = {
    id: 0,
    name: '',
    voltage: 0,
    power: 0,
    geocode: '',
    transformer: {name: '', model: {name: ''}, dateCheck: new Date(), dateInstallation: new Date(), type: {name: ''}}
  };
  options: string[] = ['Sowter8055', 'ТМГ', 'ТМ'];

  //todo изменить типы трансформаторов

  constructor(private ts: TpServiceService, private ar: ActivatedRoute,
              private router:Router) {
    let id;
    this.ar.params.subscribe(el => id = el['id']);
    ts.getModel(id).subscribe(el => this.tp = el);

  }

  ngOnInit() {
  }

  onSubmit() {
    this.ts.update(this.tp.id, this.tp);
    this.back();

  }

  back() {
    setTimeout(()=>{
      this.router.navigate(['/electro/view']);
    },DELAY);
  }
}
