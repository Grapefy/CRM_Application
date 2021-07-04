import { AlertsService } from './../../../services/shared/alerts.service';
import { CustomerService } from './../../../services/customer.service';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  addressForm!: FormGroup;

  constructor(private fb: FormBuilder, private CustomerService: CustomerService, private AlertsService: AlertsService, private Router: Router) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fone: ['', Validators.required],
      cpf: [''],
      cnpj: [''],
      dt_nascimento: [''],
    });
  }

  getAddressForm(event:any){
    this.addressForm = event.value
  }

  submitForm() {
    var CF = {}
    CF = this.CustomerService.generateArrayCliente(this.customerForm);

    this.CustomerService.create(JSON.stringify([CF,this.addressForm])).subscribe((result) => {
      this.AlertsService.showAlertSuccess('Verifique a tabela e veja mais informacoes', 'Cliente Cadastrado!');
      setTimeout(() => {
        this.Router.navigate(['/customer']);
      }, 2000);
    })
  }
}
