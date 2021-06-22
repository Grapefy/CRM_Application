import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  Offices = [
    { value: 'Desenvolvedor Júnior', label: 'Desenvolvedor Júnior'},
    { value: 'Desenvolvedor Pleno', label: 'Desenvolvedor Pleno' },
  ];

  linearMode = true;
  employeeForm!: FormGroup;
  adressForm!: FormGroup;

  constructor(private fb: FormBuilder, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cargo: ['', Validators.required],
      fone: ['', Validators.required],
      dt_nascimento: ['', Validators.required],
    });

    this.adressForm = this.fb.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      uf: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
    });
  }

  // FUNCAO TESTE QUE ME BASEEI PRA VERIFICAR COMO OBTER OS PARAMETROS PRO BD (NAO APAGAR ELA)
  submit() {
    console.log(this.employeeForm.controls)
    console.log(this.adressForm.controls)
  }

}
