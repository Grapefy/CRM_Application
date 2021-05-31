import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  typeCustomer = [
    { value: 'cf', label: 'Pessoa Física'},
    { value: 'cj', label: 'Pessoa Jurídica' },
  ];
  option: any;

  constructor() { }

  ngOnInit(): void {
  }

}
