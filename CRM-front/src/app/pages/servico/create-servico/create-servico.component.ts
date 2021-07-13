import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-servico',
  templateUrl: './create-servico.component.html',
  styleUrls: ['./create-servico.component.scss']
})
export class CreateServicoComponent implements OnInit {

  Sectors = [
    { value: 1, label: 'TI'},
    { value: 2, label: 'RH' },
  ];

  serviceForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      nome: ['', Validators.required],
      valor: ['',Validators.required],
      setor: ['',Validators.required],
      descricao: [''],
    });

  }

}
