import {Component, OnInit} from '@angular/core';
import {Fider} from 'src/app/models/fider';
import {Counter} from 'src/app/models/counter';
import {ElectricityService} from '../../electricity.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FiderServiceService} from '../../fider-service.service';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-fider-change',
  templateUrl: './fider-change.component.html',
  styleUrls: ['./fider-change.component.scss']
})
export class FiderChangeComponent implements OnInit {
  fider: Fider = new Fider();

  constructor(
    private fs: FiderServiceService,
    private ar: ActivatedRoute,
    private router: Router
  ) {


  }

  ngOnInit() {
    let id;
    this.ar.params.subscribe(el => id = el['id']);
    console.log(id);
    this.fs.getModel(id).subscribe(el => this.fider = el);
  }

  onSubmit() {
    this.fs.update(this.fider.id, this.fider);
  this.back();
  }

  back() {
    setTimeout(()=>{
      this.router.navigate(['/electro/view']);
    },DELAY);
  }
}
