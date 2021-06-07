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
  
  constructor(private fb: FormBuilder, private toastrService: NbToastrService) { }

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
  submit() {
    console.log(this.admForm.controls)
    console.log(this.adressForm.controls)
  }

}
