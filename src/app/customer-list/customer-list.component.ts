import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from './../customer.service';
import { Customer } from './../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Observable<Customer[]>

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customers = this.customerService.getCustomersList();
  }

}
