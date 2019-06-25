import {Component, OnInit} from '@angular/core';
import {Fider} from 'src/app/models/fider';
import {ElectricityService} from '../../electricity.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FiderServiceService} from '../../fider-service.service';
import {MatTableDataSource} from '@angular/material';
import {Tp} from '../../../models/tp';
import {Tables} from '../../request-constructor/Tables';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-fider-view',
  templateUrl: './fider-view.component.html',
  styleUrls: ['./fider-view.component.scss']
})
export class FiderViewComponent implements OnInit {
  private id: number;
  dataSource: MatTableDataSource<Tp>;
  displayedColumns: string[] = Tables.find(el => el.name == 'Tp').labels.map(el => el.name);
  fider: Fider = new Fider();

  constructor(
    private fs: FiderServiceService,
    private rt: ActivatedRoute,
    private router: Router
  ) {

  }


  ngOnInit() {
    this.loadFider();
  }

  loadFider() {
    this.id = this.rt.snapshot.params['id'];

    this.fs.getModel(this.id).subscribe(el => {
      this.fider = el;
      this.dataSource = new MatTableDataSource(el.tps);
    });
    console.log(this.fider);
  }

  onSubmit() {
    console.log(this.fider.id);
    this.router.navigate(['/electro/fider/change/', this.fider.id]);
  }

  selectTp(row: Tp) {
    this.router.navigate(['/electro/tp/view/', row.id]);

  }

  remove() {
    this.fs.remove(this.fider.id, this.fider);
    this.back();

  }

  back() {
    setTimeout(()=>{
      this.router.navigate(['/electro/view']);
    },DELAY);
  }
}
