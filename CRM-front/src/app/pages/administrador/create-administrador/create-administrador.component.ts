import { Router } from '@angular/router';
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
  addressForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private AdministratorService: AdministratorService, private alertService: AlertsService, private Router: Router) { }

  ngOnInit(): void {
    this.admForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fone: ['', Validators.required],
    });

  }

  getAddressForm(event:any){
    this.addressForm = event.value
  }

  // FUNCAO TESTE QUE ME BASEEI PRA VERIFICAR COMO OBTER OS PARAMETROS PRO BD (NAO APAGAR ELA)
  submitForm() {
    var CF = {}
    CF = this.AdministratorService.generateArrayCliente(this.admForm);

    this.AdministratorService.create(JSON.stringify([CF,this.addressForm])).subscribe((result) => {
      this.alertService.showAlertSuccess('Verifique a tabela para mais informações','Administrador Cadastrado');
      setTimeout(() => {
        this.Router.navigate(['/administrador']);
      }, 2000);
    })
  }

}
