import { Router } from '@angular/router';
import { AlertsService } from './../../../services/shared/alerts.service';
import { PlanService } from './../../../services/plans.service';
import { PlanTypeService } from './../../../services/planstype.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-plans-business',
  templateUrl: './create-plans-business.component.html',
  styleUrls: ['./create-plans-business.component.scss']
})
export class CreatePlansBusinessComponent implements OnInit {
  plansForm!: FormGroup;
  PlansType: any = [];

  constructor(private fb: FormBuilder, private PlanTypeService: PlanTypeService, private PlanService: PlanService, private AlertsService: AlertsService,
    private Router: Router) { }

  ngOnInit(): void {

    this.PlanTypeService.list().subscribe( (tipoplanos: any) => {
      tipoplanos.tipoplanos.forEach( (element: any) => {
        this.PlansType.push({value: element.id_tipoplano, label: element.nome})
      });
    })

    this.plansForm = this.fb.group({
      nome: ['', Validators.required],
      recorrencia: ['',Validators.required],
      valor: ['',Validators.required],
      tipoplano: ['', Validators.required],
      detalhes: [''],
    });
  }
  

  submitForm() {
    var PF = {}
    PF = this.PlanService.generateArrayPlan(this.plansForm);

    this.PlanService.create(JSON.stringify(PF)).subscribe((result) => {
      this.AlertsService.showAlertSuccess('Verifique a tabela e veja mais informacoes', 'Plano Cadastrado!');
      setTimeout(() => {
        this.Router.navigate(['/plans']);
      }, 2000);
    })
  }

}
