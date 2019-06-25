import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ElectricityService} from '../electricity.service';
import {Fider} from 'src/app/models/fider';
import {Tp} from 'src/app/models/tp';
import {Section} from 'src/app/models/section';
import {Line} from 'src/app/models/line';
import {ElectroObject, IElectroReview} from 'src/app/models/electro-object';
import {FiderServiceService} from '../fider-service.service';
import {TpServiceService} from '../tp-service.service';
import {SectionServiceService} from '../section-service.service';
import {LineServiceService} from '../line-service.service';
import {map} from 'rxjs/operators';
import {forEach} from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';
import {Sort} from '@angular/material/sort';

import {ExcelService} from '../../excel.service';


@Component({
  selector: 'app-electricity-review',
  templateUrl: './electricity-review.component.html',
  styleUrls: ['./electricity-review.component.scss']
})
export class ElectricityReviewComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Name', 'Type', 'Power', 'Voltage', 'Geocode'];
  arr = [];
  filterType: string;


  dataSource: MatTableDataSource<IElectroReview>;

  constructor(
    private fiderService: FiderServiceService,
    private tpService: TpServiceService,
    private sectionService: SectionServiceService,
    private lineService: LineServiceService,
    private router: Router,
    private rs: ExcelService
  ) {


  }

  ngOnInit() {


    this.loadData();
  }

  loadData() {
    this.fiderService.getModelArray().subscribe(fiders => fiders.forEach(el => this.add_convertate(el, 'Фидер')));
    this.tpService.getModelArray().subscribe(tps => tps.forEach(el => this.add_convertate(el, 'ТП')));
    this.lineService.getModelArray().subscribe(tps => tps.forEach(el => this.add_convertate(el, 'Линия')));
    this.sectionService.getModelArray().subscribe(tps => tps.forEach(el => this.add_convertate(el, 'Секция')));
  }

  reportElectricity() {
    this.rs.reportCountPointConnection(this.dataSource.data);
  }

  add_convertate(obj: any, type: string): void {
    let saveValue = obj as ElectroObject;
    let response: IElectroReview = {
      id: saveValue.id,
      name: saveValue.name,
      voltage: saveValue.voltage,
      power: saveValue.power,
      geocode: saveValue.geocode,
      type
    };
    this.arr.push(response);
    this.dataSource = new MatTableDataSource(this.arr);


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectObject(row: any) {
    console.log(row);
    switch (row.type) {
      case 'Фидер':
        this.router.navigate(['/electro/fider/view', row.id]);
        break;
      case 'ТП':
        this.router.navigate(['/electro/tp/view', row.id]);
        break;
      case 'Секция':
        this.router.navigate(['/electro/section/view', row.id]);
        break;
      case 'Линия':
        this.router.navigate(['/electro/line/view', row.id]);
        break;

    }
  }

  filterObject() {

    if (this.filterType != 'null' && this.filterType) {
      this.dataSource = new MatTableDataSource(this.dataSource.data.filter(el => el.type == this.filterType));

    } else {
      this.loadData();
    }

  }


  sortElectro(sort: Sort) {
    console.log(sort);
    if (!sort.active || sort.direction === '') {

      return;
    } else {
      let lower =sort.active.toLocaleLowerCase();
      if (sort.direction === 'asc') {
        this.dataSource.data = this.dataSource.data.sort((a, b) => a[lower] - b[lower]);
      }
      else{
        this.dataSource.data = this.dataSource.data.sort((a, b) =>  b[lower]-a[lower]);

      }
    }
  }
}
