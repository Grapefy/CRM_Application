import { AdministratorService } from './../../../services/administrator.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-create-administrador',
  templateUrl: './create-administrador.component.html',
  styleUrls: ['./create-administrador.component.scss']
})
export class CreateAdministradorComponent implements OnInit {

  linearMode = true;
  admForm!: FormGroup;
  adressForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private toastrService: NbToastrService, private AdministratorService: AdministratorService) { }

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

  stepOneErrorMessage(status: NbComponentStatus) {
    if (this.admForm.invalid){
      this.toastrService.show('Digite o formulário completo', 'ATENCAO!', { status, preventDuplicates: true });
    }
  }

  stepTwoErrorMessage(status: NbComponentStatus) {
    if (this.adressForm.invalid){
      this.toastrService.show('Digite o formulário completo', 'ATENCAO!', { status, preventDuplicates: true });
    }
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
