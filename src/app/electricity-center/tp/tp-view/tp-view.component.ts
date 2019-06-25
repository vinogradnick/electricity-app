import {Component, OnInit} from '@angular/core';
import {TpServiceService} from '../../tp-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Tp} from 'src/app/models/tp';
import {MatTableDataSource} from '@angular/material';
import {Tables} from '../../request-constructor/Tables';
import {Section} from '../../../models/section';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-tp-view',
  templateUrl: './tp-view.component.html',
  styleUrls: ['./tp-view.component.scss']
})
export class TpViewComponent implements OnInit {


  dataSource: MatTableDataSource<Section>;
  displayedColumns: string[] = Tables.find(el => el.name == 'Section').labels.map(el => el.name);

  id: number;
  tp: Tp = new Tp();

  constructor(
    private fs: TpServiceService,
    private rt: ActivatedRoute,
    private router: Router
  ) {

  }


  ngOnInit() {
    this.loadFider();
  }

  loadFider() {
    this.id = this.rt.snapshot.params['id'];
    console.log(this.id);
    this.fs.getModel(this.id).subscribe(el => {
      this.tp = el;
      this.dataSource = new MatTableDataSource(el.sections);
    });
    console.log(this.tp);
  }

  onSubmit() {
    console.log(this.tp.id);
    this.router.navigate(['/electro/tp/change/', this.tp.id]);
  }

  selectSection(row: Section) {
    this.router.navigate(['/electro/section/view/', row.id]);

  }

  back() {
    setTimeout(()=>{
      this.router.navigate(['/electro/view']);
    },DELAY);
  }

  remove() {
    this.fs.remove(this.tp.id,this.tp);
    this.back();
  }
}
