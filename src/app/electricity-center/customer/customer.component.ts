import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Customer} from 'src/app/models/customer';
import {Router} from '@angular/router';
import {CustomerServiceService} from '../customer-service.service';
import {ExcelService} from '../../excel.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  columnsToDisplay = ['id', 'name', 'objectAddress', 'objectName', 'placeInstall', 'lineId', 'status'];
  dataSource: MatTableDataSource<Customer>;
  customer: Customer;

  constructor(private router: Router,
              private cs: CustomerServiceService,
              private rs:ExcelService
  ) {
  }

  ngOnInit() {
    this.cs.getModelArray().subscribe(el => this.dataSource = new MatTableDataSource(el));

  }

  selectedCustomer(cus: Customer) {
    this.router.navigate(['electro/customer/detail/', cus.id]);
  }

  reportDisabled() {
    this.rs.reportCustomers(this.dataSource.data);
  }
}
