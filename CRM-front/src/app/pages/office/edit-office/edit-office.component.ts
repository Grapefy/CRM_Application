import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-office',
  templateUrl: './edit-office.component.html',
  styleUrls: ['./edit-office.component.scss']
})
export class EditOfficeComponent implements OnInit {

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
