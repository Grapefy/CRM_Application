import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  onEdit = false; 

  constructor() { }

  ngOnInit(): void {
  }

  onEditForm(){
    this.onEdit = true;
  }
  
  offEditForm(){
    this.onEdit = false;
  }

}
