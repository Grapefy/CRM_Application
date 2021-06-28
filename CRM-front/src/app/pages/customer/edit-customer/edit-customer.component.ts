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
  customerEditId!: number | string | null;
  addressEditId!: number | string | null;

  constructor( private lastRoute: ActivatedRoute, private fb: FormBuilder, private toastrService: NbToastrService, private CustomerService: CustomerService ) { }

  ngOnInit(): void {
    const id = this.lastRoute.snapshot.paramMap.get('id')
    this.customerEditId = id;

    this.CustomerService.readById(id).subscribe((cliente: any) => {

      this.addressEditId = cliente.cliente.enderecos[0].id_endereco;

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

    })

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

  submitForm() {
    var CF = {}
    var AF = {}
    CF = this.generateArrayCliente(this.customerEditForm);
    AF = this.generateArrayAdress(this.addressEditForm);

    this.CustomerService.update(JSON.stringify([CF,AF,this.customerEditId,this.addressEditId]),this.customerEditId).subscribe((result) => {
      console.log(result)
    })
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

  generateArrayAdress(fg: any) {
    var retorno = {
      'bairro': fg.controls.bairro.value, 
      'cep': fg.controls.cep.value, 
      'logradouro': fg.controls.logradouro.value, 
      'numero': fg.controls.numero.value,
      'uf': fg.controls.uf.value
    };

    return retorno;

  }

}
