import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  onEdit = false; 
  employeeEditForm!: FormGroup;
  addressEditForm!: FormGroup;
  Offices = [
    { value: 'Desenvolvedor Júnior', label: 'Desenvolvedor Júnior'},
    { value: 'Desenvolvedor Pleno', label: 'Desenvolvedor Pleno' },
  ];

  constructor(private lastRoute: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    const id = this.lastRoute.snapshot.paramMap.get('id')
    this.employeeEditForm = this.fb.group({
      nome: ['Lucas', Validators.required],
      email: ['lucas.firmianosg@gmail.com', [Validators.required, Validators.email]],
      cargo: ['Desenvolvedor Júnior',Validators.required],
      fone: ['(85) 99702-8392', Validators.required],
      dt_nascimento: [''],
    });

    this.addressEditForm = this.fb.group({
      cep: ['60455-365', Validators.required],
      logradouro: ['RUA PADRE GUERRA', Validators.required],
      uf: ['CE', Validators.required],
      bairro: ['PARQUELANDIA', Validators.required],
      numero: ['1045', Validators.required],
      complemento: ['CASA A'],
    });


    this.employeeEditForm.disable();
    this.addressEditForm.disable();
  }

  onEditForm(){
    this.onEdit = true;
    this.employeeEditForm.enable();
    this.addressEditForm.enable();
  }
  
  offEditForm(){
    this.onEdit = false;
    this.employeeEditForm.disable();
    this.addressEditForm.disable();
  }

}
