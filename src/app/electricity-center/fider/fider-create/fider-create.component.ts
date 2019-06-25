import {Component, OnInit} from '@angular/core';
import {Fider} from 'src/app/models/fider';
import {ElectricityService} from '../../electricity.service';
import {Counter} from 'src/app/models/counter';
import {FiderServiceService} from '../../fider-service.service';
import {Router} from '@angular/router';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-fider-create',
  templateUrl: './fider-create.component.html',
  styleUrls: ['./fider-create.component.scss']
})
export class FiderCreateComponent implements OnInit {
  fider: Fider = new Fider();

  constructor(private fs: FiderServiceService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.fs.create(this.fider);
    this.back();

  }

  back() {
    setTimeout(() => {
      this.router.navigate(['/electro/view']);
    }, DELAY);
  }
}
