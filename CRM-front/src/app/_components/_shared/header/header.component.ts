import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService} from '@nebular/theme';

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

  constructor(private sidebarService: NbSidebarService, private menuService: NbMenuService, private Router: Router) { }

  ngOnInit(): void {
    this.menuService.onItemClick().subscribe((event) => {
      if (event.item.title === 'Log out') {
        window.localStorage.clear();
        this.Router.navigate([''])
      }
    });
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

}
