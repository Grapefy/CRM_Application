import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-sector',
  templateUrl: './edit-sector.component.html',
  styleUrls: ['./edit-sector.component.scss']
})
export class EditSectorComponent implements OnInit {

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
