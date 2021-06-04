import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-administrador',
  templateUrl: './create-administrador.component.html',
  styleUrls: ['./create-administrador.component.scss']
})
export class CreateAdministradorComponent implements OnInit {

  nome = new FormControl('',[Validators.required]); 
  email = new FormControl('',[Validators.required, Validators.email]);
  fone = new FormControl('',[Validators.required ]);

  cep = new FormControl('',[Validators.required]);
  logradouro  = new FormControl('',[Validators.required ]);
  uf = new FormControl('',[Validators.required ]);
  bairro = new FormControl('',[Validators.required]);
  numero = new FormControl('',[Validators.required]);
  complemento = new FormControl('');
  
  constructor() { }

  ngOnInit(): void {
  }

}
