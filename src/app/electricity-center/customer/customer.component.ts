import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Customer } from 'src/app/models/customer';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';




@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  columnsToDisplay = ["id", "name", 'objectAddress', 'objectName', 'placeInstall', 'fiderNumber', 'lineNumber', 'tpNumber', 'status']
  dataSource :MatTableDataSource<Customer>;
  customer:Customer;
  constructor(private router:Router,

    private cs:CustomerServiceService
    ) { }

  ngOnInit() {
   this.cs.getModelArray().subscribe(el=>this.dataSource=new MatTableDataSource(el));
    
  }
  selectedCustomer(cus:Customer){
    this.router.navigate(['electro/customer/detail/',cus.id]);
  }

}
