import {Component, OnInit} from '@angular/core';
import {Line} from 'src/app/models/line';
import {ElectricityService} from '../../electricity.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LineServiceService} from '../../line-service.service';

@Component({
  selector: 'app-line-change',
  templateUrl: './line-change.component.html',
  styleUrls: ['./line-change.component.scss']
})
export class LineChangeComponent implements OnInit {
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
    private ar: ActivatedRoute,
    private router: Router,
  ) {


  }

  ngOnInit() {
    let id;
    this.ar.params.subscribe(el => id = el['id']);
    this.ls.getModel(id).subscribe(el => this.line = el);
  }

  onSubmit() {
    this.ls.update(this.line.id, this.line);
    this.back();
  }

  back() {
    setTimeout(()=>{
      this.router.navigate(['/electro/main']);
    },700);
  }


}
