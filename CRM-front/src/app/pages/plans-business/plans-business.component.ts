import { PlanService } from './../../services/plans.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import {  PlansSite, PlansSystem } from 'src/app/models/plans.model';

@Component({
  selector: 'app-plans-business',
  templateUrl: './plans-business.component.html',
  styleUrls: ['./plans-business.component.scss']
})
export class PlansBusinessComponent implements OnInit {

  planosSistema: PlansSystem[] = []

  planosSite: PlansSite[] = []

  selectedPlan: string = '';
  selectedId!: number ;
  
  constructor(private dialogService: NbDialogService, private PlanService: PlanService) { }

  ngOnInit(): void {
    this.PlanService.list().subscribe( (planos: any) => {
      planos.planos.forEach( (element: any) => {
        var tipoplanoID = element.tipoplano_id
        if (tipoplanoID == 1) {
          this.planosSistema.push(new PlansSystem(element.id_plano, element.nome, element.recorrencia, element.valor, element.detalhes))
        } else if (tipoplanoID == 2) {
          this.planosSite.push(new PlansSite(element.id_plano, element.nome, element.recorrencia, element.valor, element.detalhes))
        }
      });
    })
  }


  openDelete(dialog: TemplateRef<any>, servico: string, id: number) {
    this.selectedPlan = servico,
    this.selectedId = id,
    this.dialogService.open(dialog);
  }

  submitDelete(id: number) {
    this.PlanService.delete(id).subscribe( (result: any) => {
      window.location.reload();
    }, error => {
      window.location.reload();
    })
  }
  
}
