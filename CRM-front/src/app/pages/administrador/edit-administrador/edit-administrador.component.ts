import { AdministratorService } from './../../../services/administrator.service';
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
  addressEditForm!: FormGroup;
  administratorEditId!: number | string | null;
  addressEditId!: number | string | null;

  constructor(private lastRoute: ActivatedRoute, private fb: FormBuilder, private AdministratorService: AdministratorService) { }

  ngOnInit(): void {
    const id = this.lastRoute.snapshot.paramMap.get('id')
    this.administratorEditId = id;

    this.AdministratorService.readById(id).subscribe((administrador: any) => {

      this.addressEditId = administrador.administrador.enderecos[0].id_endereco;

      this.administradorEditForm = this.fb.group({
        nome: [administrador.administrador.nome, Validators.required],
        email: [administrador.administrador.email, [Validators.required, Validators.email]],
        fone: [administrador.administrador.fone, Validators.required],
      });

      this.addressEditForm = this.fb.group({
        cep: [administrador.administrador.enderecos[0].cep, Validators.required],
        logradouro: [administrador.administrador.enderecos[0].logradouro, Validators.required],
        uf: [administrador.administrador.enderecos[0].uf, Validators.required],
        bairro: [administrador.administrador.enderecos[0].bairro, Validators.required],
        numero: [administrador.administrador.enderecos[0].numero, Validators.required],
        complemento: [administrador.administrador.enderecos[0].complemento],
      });
  
      this.administradorEditForm.disable();
      this.addressEditForm.disable();
    })
  }

  onEditForm(){
    this.onEdit = true;
    this.administradorEditForm.enable();
    this.addressEditForm.enable();
  }
  
  offEditForm(){
    this.onEdit = false;
    this.administradorEditForm.disable();
    this.addressEditForm.disable();
  }

  // FUNCAO TESTE QUE ME BASEEI PRA VERIFICAR COMO OBTER OS PARAMETROS PRO BD (NAO APAGAR ELA)
  submitForm() {
    var CF = {}
    var AF = {}
    CF = this.generateArrayAdm(this.administradorEditForm);
    AF = this.generateArrayAdress(this.addressEditForm);

    this.AdministratorService.update(JSON.stringify([CF,AF,this.administratorEditId,this.addressEditId]),this.administratorEditId).subscribe((result) => {
      window.location.reload();
    })
    
  }

  generateArrayAdm(fg: any) {
    var retorno = {
      'nome': fg.controls.nome.value, 
      'email': fg.controls.email.value, 
      'fone': fg.controls.fone.value
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
