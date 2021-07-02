import { CustomerService } from './../../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder, private CustomerService: CustomerService) { }



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

  submitForm() {
    // var CF = {}
    // var AF = {}
    // CF = this.generateArrayCliente(this.customerForm);
    // AF = this.generateArrayAdress(this.adressForm);

    // this.CustomerService.create(JSON.stringify([CF,AF])).subscribe((result) => {
    //   console.log(result)
    // })

    // console.log(CF);
    // console.log(AF);
  }

  generateArrayCliente(fg: any) {
    var retorno = {
      'nome': fg.controls.nome.value, 
      'email': fg.controls.email.value, 
      'fone': fg.controls.fone.value, 
      'dt_nascimento': fg.controls.dt_nascimento.value,
      'cpf': fg.controls.cpf.value,
      'cnpj': fg.controls.cnpj.value
    };
    return retorno;
  }

  // generateArrayAdress(fg: any) {
  //   var retorno = {
  //     'bairro': fg.controls.bairro.value, 
  //     'cep': fg.controls.cep.value, 
  //     'logradouro': fg.controls.logradouro.value, 
  //     'numero': fg.controls.numero.value,
  //     'uf': fg.controls.uf.value
  //   };

  //   return retorno;

  // }
  
}
