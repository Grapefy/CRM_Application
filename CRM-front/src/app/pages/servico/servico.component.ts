import { ServiceService } from './../../services/service.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss']
})
export class ServicoComponent implements OnInit {

  services: any = [];
  selectedService: string = '';
  selectedId!: number ;

  constructor(private dialogService: NbDialogService, private ServiceService: ServiceService) { }

  ngOnInit(): void {
    this.ServiceService.list().subscribe( (servicos: any) => {
      this.services = servicos.servicos;
    })
  }
  
  openDelete(dialog: TemplateRef<any>, servico: string, id: number) {
    this.selectedService = servico,
    this.selectedId = id,
    this.dialogService.open(dialog);
  }

  submitDelete(id: number) {
    this.ServiceService.delete(id).subscribe( (result: any) => {
      window.location.reload();
    }, error => {
      window.location.reload();
    })
  }

}
