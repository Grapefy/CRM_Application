import { NbToastrService } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  onEdit = false; 
  customerEditForm!: FormGroup;
  addressEditForm!: FormGroup;

  constructor( private lastRoute: ActivatedRoute, private fb: FormBuilder, private toastrService: NbToastrService ) { }

  ngOnInit(): void {
    const id = this.lastRoute.snapshot.paramMap.get('id')
    this.customerEditForm = this.fb.group({
      nome: ['Lucas', Validators.required],
      email: ['lucas.firmianosg@gmail.com', [Validators.required, Validators.email]],
      fone: ['(85) 99702-8392', Validators.required],
      cpf: ['068.681.043-08'],
      cnpj: ['-'],
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

    this.customerEditForm.disable();
    this.addressEditForm.disable();
  }

  onEditForm(){
    this.onEdit = true;
    this.customerEditForm.enable();
    this.addressEditForm.enable();
  }
  
  offEditForm(){
    this.onEdit = false;
    this.customerEditForm.disable();
    this.addressEditForm.disable();
  }

}
