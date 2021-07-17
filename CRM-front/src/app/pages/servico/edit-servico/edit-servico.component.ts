import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-servico',
  templateUrl: './edit-servico.component.html',
  styleUrls: ['./edit-servico.component.scss']
})
export class EditServicoComponent implements OnInit {

  Sectors = [
    { value: 1, label: 'TI'},
    { value: 2, label: 'RH' },
  ];

  serviceEditForm!: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.serviceEditForm = this.fb.group({
      nome: ['', Validators.required],
      valor: ['',Validators.required],
      setor: ['',Validators.required],
      descricao: [''],
    });
  }

}
