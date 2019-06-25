import {Component, OnInit} from '@angular/core';
import {Line} from 'src/app/models/line';
import {Counter} from 'src/app/models/counter';
import {ElectricityService} from '../../electricity.service';
import {LineServiceService} from '../../line-service.service';
import {Router} from '@angular/router';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-line-create',
  templateUrl: './line-create.component.html',
  styleUrls: ['./line-create.component.scss']
})
export class LineCreateComponent implements OnInit {
  line: Line = {
    id: 0,
    name: '',
    voltage: 0,
    power: 0,
    geocode: '',
    counter: {id: 0, name: '', brand: {id: 0, name: ''}, dateLastCheck: new Date(), date: new Date()}
  };

  constructor(
    private ls: LineServiceService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.ls.create(this.line);
    this.back();
  }

  back() {
    setTimeout(() => {
      this.router.navigate(['/electro/view']);
    }, DELAY);
  }

}
