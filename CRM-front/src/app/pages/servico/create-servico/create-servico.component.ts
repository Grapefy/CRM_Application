import { Router } from '@angular/router';
import { AlertsService } from './../../../services/shared/alerts.service';
import { ServiceService } from './../../../services/service.service';
import { SectorService } from './../../../services/sector.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-servico',
  templateUrl: './create-servico.component.html',
  styleUrls: ['./create-servico.component.scss']
})
export class CreateServicoComponent implements OnInit {

  Sectors: any = [];
  serviceForm!: FormGroup;

  constructor(private fb: FormBuilder, private SectorService: SectorService, private ServiceService: ServiceService, private AlertsService: AlertsService, private Router: Router) { }

  ngOnInit(): void {
    this.SectorService.list().subscribe( (setores: any) => {
      setores.setors.forEach( (element: any) => {
        this.Sectors.push({value: element.id_setor, label: element.nome})
      });
    })
    this.serviceForm = this.fb.group({
      nome: ['', Validators.required],
      valor: ['',Validators.required],
      setor: ['',Validators.required],
      descricao: [''],
    });
  }

  submitForm() {
    var SF = {}
    SF = this.ServiceService.generateArrayService(this.serviceForm);
    this.ServiceService.create(JSON.stringify(SF)).subscribe((result) => {
      this.AlertsService.showAlertSuccess('Verifique a tabela e veja mais informacoes', 'Servico Cadastrado!');
      setTimeout(() => {
        this.Router.navigate(['/service']);
      }, 2000);
    })
  }

}
