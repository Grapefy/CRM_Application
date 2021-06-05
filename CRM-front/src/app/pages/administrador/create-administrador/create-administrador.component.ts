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
  firstForm!: FormGroup;

  cep = new FormControl('',[Validators.required]);
  logradouro  = new FormControl('',[Validators.required ]);
  uf = new FormControl('',[Validators.required ]);
  bairro = new FormControl('',[Validators.required]);
  numero = new FormControl('',[Validators.required]);
  complemento = new FormControl('');
  
  constructor(private fb: FormBuilder, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.firstForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fone: ['', Validators.required],
    });

  }

  stepErrorMessage(status: NbComponentStatus) {
    if (this.firstForm.invalid){
      this.toastrService.show('Digita essas porra ae preguicoso', 'ATENCAO!', { status, preventDuplicates: true });
    }
  }

}
