import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  onEdit = false; 

  constructor( private lastRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.lastRoute.snapshot.paramMap.get('id')
    console.log(id)
  }

  onEditForm(){
    this.onEdit = true;
  }
  
  offEditForm(){
    this.onEdit = false;
  }

}
