import {Component, OnInit} from '@angular/core';
import {Tp} from 'src/app/models/tp';
import {ElectricityService} from '../../electricity.service';
import {TpServiceService} from '../../tp-service.service';
import {Router} from '@angular/router';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-tp-create',
  templateUrl: './tp-create.component.html',
  styleUrls: ['./tp-create.component.scss']
})
export class TpCreateComponent implements OnInit {
  tp: Tp = {
    id: 0,
    name: '',
    voltage: 0,
    power: 0,
    geocode: '',
    transformer: {name: '', model: {name: ''}, dateCheck: new Date(), dateInstallation: new Date(), type: {name: ''}}
  };
  options: string[] = ['Sowter8055', 'ТМГ', 'ТМ'];
  transType:string[]=['Автотрансформатор','Импульсный ','Разделительный ','Cиловой']

  constructor(private ts: TpServiceService,
              private router:Router
  ) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.ts.create(this.tp);
    this.back();
  }

  back() {
    setTimeout(()=>{
      this.router.navigate(['/electro/view']);
    },DELAY);
  }
}
