import { AlertsService } from './../../../services/shared/alerts.service';
import { PlanTypeService } from './../../../services/planstype.service';
import { PlanService } from './../../../services/plans.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plans-edit-business',
  templateUrl: './plans-edit-business.component.html',
  styleUrls: ['./plans-edit-business.component.scss']
})
export class PlansEditBusinessComponent implements OnInit {

  plansEditForm!: FormGroup;
  planEditId!: number | string | null;
  PlansType: any = [];

  constructor(private lastRoute: ActivatedRoute, private fb: FormBuilder, private PlanService: PlanService, private PlanTypeService: PlanTypeService, 
    private AlertsService: AlertsService, private Router: Router) { }

  ngOnInit(): void {
    const id = this.lastRoute.snapshot.paramMap.get('id')
    this.planEditId = id

    this.PlanTypeService.list().subscribe( (tipoplanos: any) => {
      tipoplanos.tipoplanos.forEach( (element: any) => {
        this.PlansType.push({value: element.id_tipoplano, label: element.nome})
      });
    })

    this.PlanService.readById(id).subscribe((plan: any) => {
      this.plansEditForm = this.fb.group({
        nome: [plan.plano.nome, Validators.required],
        recorrencia: [plan.plano.recorrencia,Validators.required],
        valor: [plan.plano.valor,Validators.required],
        tipoplano: [plan.plano.tipoplano_id, Validators.required],
        detalhes: [plan.plano.detalhes],
      });
    })
  }

  submitForm() {
    var PF = {}
    PF = this.PlanService.generateArrayPlan(this.plansEditForm);

    this.PlanService.update(JSON.stringify(PF),this.planEditId).subscribe((result) => {
      this.AlertsService.showAlertSuccess('Verifique a tabela e veja mais informacoes', 'Plano Editado!');
      setTimeout(() => {
        this.Router.navigate(['/plans']);
      }, 2000);
    })
  }

}
