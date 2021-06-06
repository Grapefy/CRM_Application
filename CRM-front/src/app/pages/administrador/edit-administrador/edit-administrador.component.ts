import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-administrador',
  templateUrl: './edit-administrador.component.html',
  styleUrls: ['./edit-administrador.component.scss']
})
export class EditAdministradorComponent implements OnInit {

  onEdit = false; 

  constructor(private lastRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.lastRoute.snapshot.paramMap.get('id')
  }

  onEditForm(){
    this.onEdit = true;
  }
  
  offEditForm(){
    this.onEdit = false;
  }
}
