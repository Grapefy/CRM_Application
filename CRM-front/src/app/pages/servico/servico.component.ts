import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss']
})
export class ServicoComponent implements OnInit {

  services: Service[] = [
    new Service(1,'Desenvolvimento de site', 
      'Desenvolver sites com modelos bem fáceis e bonitos para o usuário',
      'TI',
      2000),

    new Service(2,'Desenvolvimento de sistema', 
      'Desenvolver sistemas com alta perfomace e com um bom UI',
      'TI',
      3000),
  ];

  selectedService: string = '';
  selectedId!: number ;

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  
  openDelete(dialog: TemplateRef<any>, servico: string, id: number) {
    this.selectedService = servico,
    this.selectedId = id,
    this.dialogService.open(dialog);
  }

}
