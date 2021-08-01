import { Component, OnInit } from '@angular/core';
import {  PlansSite, PlansSystem } from 'src/app/models/plans.model';

@Component({
  selector: 'app-plans-business',
  templateUrl: './plans-business.component.html',
  styleUrls: ['./plans-business.component.scss']
})
export class PlansBusinessComponent implements OnInit {

  planosSistema: PlansSystem[] = [
    new PlansSystem(1,'Plano A','Semestral',5000.00,'Details here',2),
    new PlansSystem(2,'Plano B','Mensal',700.00,'Details here')
  ]

  planosSite: PlansSite[] = [
    new PlansSite(1,'Plano C','Semestral',5000.00,'Details here',2),
    new PlansSite(2,'Plano D','Mensal',700.00,'Details here')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
