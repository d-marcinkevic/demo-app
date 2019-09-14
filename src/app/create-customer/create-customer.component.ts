import { Component, OnInit } from '@angular/core';

import { CustomerService } from './../customer.service';
import { Customer } from './../customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer;
  submitted = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  save() {
    this.customerService.createCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
