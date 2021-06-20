import { CustomerService } from './../../../services/customer.service';
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

  constructor( private lastRoute: ActivatedRoute, private fb: FormBuilder, private toastrService: NbToastrService, private CustomerService: CustomerService ) { }

  ngOnInit(): void {
    const id = this.lastRoute.snapshot.paramMap.get('id')

    this.CustomerService.readById(id).subscribe((cliente: any) => {

      console.log(cliente.cliente)

      this.customerEditForm = this.fb.group({
        nome: [cliente.cliente.nome, Validators.required],
        email: [cliente.cliente.email, [Validators.required, Validators.email]],
        fone: [cliente.cliente.fone, Validators.required],
        cpf: [cliente.cliente.identificador],
        cnpj: ['-'],
        dt_nascimento: [''],
      });

      this.addressEditForm = this.fb.group({
        cep: [cliente.cliente.enderecos[0].cep, Validators.required],
        logradouro: [cliente.cliente.enderecos[0].logradouro, Validators.required],
        uf: [cliente.cliente.enderecos[0].uf, Validators.required],
        bairro: [cliente.cliente.enderecos[0].bairro, Validators.required],
        numero: [cliente.cliente.enderecos[0].numero, Validators.required],
        complemento: ['CASA A'],
      });

      this.addressEditForm.disable();
      this.customerEditForm.disable();

      // console.log(cliente.cliente)
    })

    // this.customerEditForm = this.fb.group({
    //   nome: ['Lucas', Validators.required],
    //   email: ['lucas.firmianosg@gmail.com', [Validators.required, Validators.email]],
    //   fone: ['(85) 99702-8392', Validators.required],
    //   cpf: ['068.681.043-08'],
    //   cnpj: ['-'],
    //   dt_nascimento: [''],
    // });


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
