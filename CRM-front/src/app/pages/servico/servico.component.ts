import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
