import { AlertsService } from './../../../services/shared/alerts.service';
import { AdministratorService } from './../../../services/administrator.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-administrador',
  templateUrl: './create-administrador.component.html',
  styleUrls: ['./create-administrador.component.scss']
})
export class CreateAdministradorComponent implements OnInit {

  linearMode = true;
  admForm!: FormGroup;
  adressForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private AdministratorService: AdministratorService, private alertService: AlertsService) { }

  ngOnInit(): void {
    this.admForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fone: ['', Validators.required],
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
  submitForm() {
    var CF = {}
    var AF = {}
    CF = this.generateArrayCliente(this.admForm);
    AF = this.generateArrayAdress(this.adressForm);

    this.AdministratorService.create(JSON.stringify([CF,AF])).subscribe((result) => {
      console.log(result)
    })
    //adicionar o redirecionamento da página
    this.alertService.showAlertSuccess('Verifique a tabela para mais informações','Administrador Cadastrado');
    
  }

  generateArrayCliente(fg: any) {
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
