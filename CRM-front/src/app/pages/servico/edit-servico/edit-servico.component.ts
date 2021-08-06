import { AlertsService } from './../../../services/shared/alerts.service';
import { ServiceService } from './../../../services/service.service';
import { SectorService } from './../../../services/sector.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-servico',
  templateUrl: './edit-servico.component.html',
  styleUrls: ['./edit-servico.component.scss']
})
export class EditServicoComponent implements OnInit {

  Sectors: any = [];
  serviceEditId!: number | string | null;
  serviceEditForm!: FormGroup;

  constructor(private lastRoute: ActivatedRoute, private fb: FormBuilder, private SectorService: SectorService, private ServiceService: ServiceService,
    private AlertsService: AlertsService, private Router: Router) { }


  ngOnInit(): void {

    const id = this.lastRoute.snapshot.paramMap.get('id')
    this.serviceEditId = id

    this.SectorService.list().subscribe( (setores: any) => {
      setores.setors.forEach( (element: any) => {
        this.Sectors.push({value: element.id_setor, label: element.nome})
      });
    })

    this.ServiceService.readById(id).subscribe((servico: any) => {
      this.serviceEditForm = this.fb.group({
        nome: [servico.servico.nome, Validators.required],
        setor: [servico.servico.setor_id,Validators.required],
        valor: [servico.servico.valor,Validators.required],
        descricao: [servico.servico.descricao],
      });
    })
  }

  submitForm() {
    var SF = {}
    SF = this.ServiceService.generateArrayService(this.serviceEditForm);

    this.ServiceService.update(JSON.stringify(SF), this.serviceEditId).subscribe((result) => {
      this.AlertsService.showAlertSuccess('Verifique a tabela e veja mais informacoes', 'Servico Editado!');
      setTimeout(() => {
        this.Router.navigate(['/service']);
      }, 2000);
    })
  }

}
