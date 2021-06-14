import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';

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
  linearMode = true;
  customerForm!: FormGroup;
  adressForm!: FormGroup;

  constructor(private fb: FormBuilder, private toastrService: NbToastrService) { }



  ngOnInit(): void {
    this.customerForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fone: ['', Validators.required],
      cpf: [''],
      cnpj: [''],
      dt_nascimento: [''],
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

  stepOneErrorMessage(status: NbComponentStatus) {
    if (this.customerForm.invalid){
      this.toastrService.show('Digite o formulário completo', 'ATENCAO!', { status, preventDuplicates: true });
    }
  }

  stepTwoErrorMessage(status: NbComponentStatus) {
    if (this.adressForm.invalid){
      this.toastrService.show('Digite o formulário completo', 'ATENCAO!', { status, preventDuplicates: true });
    }
  }
  
}
