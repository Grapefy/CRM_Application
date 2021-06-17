import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-administrador',
  templateUrl: './edit-administrador.component.html',
  styleUrls: ['./edit-administrador.component.scss']
})
export class EditAdministradorComponent implements OnInit {

  onEdit = false; 
  administradorEditForm!: FormGroup;

  constructor(private lastRoute: ActivatedRoute, private fb: FormBuilder,) { }

  ngOnInit(): void {
    const id = this.lastRoute.snapshot.paramMap.get('id')
    this.administradorEditForm = this.fb.group({
      nome: ['Lucas', Validators.required],
      email: ['lucas.firmianosg@gmail.com', [Validators.required, Validators.email]],
      fone: ['(85) 99702-8392', Validators.required],
    });

    this.administradorEditForm.disable();
  }

  onEditForm(){
    this.onEdit = true;
    this.administradorEditForm.enable();
  }
  
  offEditForm(){
    this.onEdit = false;
    this.administradorEditForm.disable();
  }
}
