import { Component, OnInit } from '@angular/core';
import { NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  userMenu = [{title: 'Meus Dados'} , {title: 'Log out'}];

  itemsNotificacao = [
    { title: 'Seja Bem Vindo!' },
    { title: 'Mais informações' },
  ];

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

}
