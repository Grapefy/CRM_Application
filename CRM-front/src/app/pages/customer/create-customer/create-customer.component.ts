import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  nome = new FormControl('',[Validators.required]);
  email = new FormControl('',[Validators.required, Validators.email]);
  fone = new FormControl('',[Validators.required ]);
  cpf = new FormControl('',[Validators.required]);
  cnpj = new FormControl('',[Validators.required]);
  dt_nascimento = new FormControl('',[Validators.required]);

  cep = new FormControl('',[Validators.required]);
  logradouro  = new FormControl('',[Validators.required ]);
  uf = new FormControl('',[Validators.required ]);
  bairro = new FormControl('',[Validators.required]);
  numero = new FormControl('',[Validators.required]);
  complemento = new FormControl('',[Validators.required]);


  
  constructor() { }

  // constructor(private formBuilder: FormBuilder) {
  //   this.formCustomer = this.formBuilder.group({
  //     nome : ['',Validators.required],
  //     email : ['',[Validators.required, Validators.email]],
  //     fone : ['',[Validators.required, Validators.pattern('[- +()0-9]+')]],
  //     cpf : ['',Validators.required],
  //     cnpj : ['',Validators.required],
  //     dt_nascimento : ['',Validators.required],
  //  });
  // }

  ngOnInit(): void {
  }

  
}
