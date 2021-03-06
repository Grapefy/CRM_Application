import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Inicio',
      icon:'home-outline',
    },
    {
      title: 'Clientes',
      icon:'people-outline',
      link: '/customer',
    },
    {
      title: 'Funcionarios',
      icon:'person-outline',
      link:'/employee',
    },
    {
      title: 'Nossos Serviços',
      icon:'shopping-bag-outline',
      link:'/service'
    },
    {
      title: 'Configurações Avançadas',
      icon: 'settings-outline',
      children: [
        {
          title: 'Setores',
          link: '/sector',
        },
        {
          title: 'Cargos',
          link: '/office',
        },
        {
          title: 'Nossos Planos',
          link:'/plans',
        },
        {
          title: 'Usuários',
          link: '/user',
        },
        {
          title: 'Administradores',
          link: '/administrador',
        },
      ],
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  

}
