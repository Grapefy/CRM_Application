import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plans-edit-business',
  templateUrl: './plans-edit-business.component.html',
  styleUrls: ['./plans-edit-business.component.scss']
})
export class PlansEditBusinessComponent implements OnInit {

  plansEditForm!: FormGroup;

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.plansEditForm = this.fb.group({
      nome: ['', Validators.required],
      recorrencia: ['',Validators.required],
      valor: ['',Validators.required],
      detalhes: [''],
    });
  }

}
