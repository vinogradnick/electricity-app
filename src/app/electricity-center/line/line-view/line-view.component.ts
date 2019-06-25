import {Component, OnInit} from '@angular/core';
import {Line} from '../../../models/line';
import {ActivatedRoute, Router} from '@angular/router';
import {LineServiceService} from '../../line-service.service';
import {MatTableDataSource} from '@angular/material';
import {Tables} from '../../request-constructor/Tables';
import {Customer} from '../../../models/customer';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-line-view',
  templateUrl: './line-view.component.html',
  styleUrls: ['./line-view.component.scss']
})
export class LineViewComponent implements OnInit {
  line: Line = new Line();
  dataSource: MatTableDataSource<Customer>;
  displayedColumns: string[] = Tables.find(el => el.name == 'Customer').labels.map(el => el.name);

  constructor(private ar: ActivatedRoute, private router: Router, private ls: LineServiceService) {

  }

  ngOnInit() {
    let id;
    this.ar.params.subscribe(el => id = el['id']);
    this.ls.getModel(id).subscribe(el => {
      this.line = el;
      this.dataSource = new MatTableDataSource(this.line.customers);

    });
  }

  onSubmit() {
    this.router.navigate(['/electro/line/change/', this.line.id]);
  }



  selectedCustomer(element: Customer) {
    this.router.navigate(['/electro/customer/detail/', this.line.id]);

  }

  remove() {
    this.ls.remove(this.line.id, this.line);
    this.back();
  }
  back() {
    setTimeout(()=>{
      this.router.navigate(['/electro/view']);
    },DELAY);
  }
}
