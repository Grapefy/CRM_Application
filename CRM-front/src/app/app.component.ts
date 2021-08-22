import { Component } from '@angular/core';
import { AuthGuard } from './services/shared/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRM-front';
  mostrarMenu: boolean = false;
  mostrarPainel: boolean = false;

  constructor(private authService : AuthGuard){
  }
  
  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostraMenu => this.mostrarMenu = mostraMenu
    );
    this.authService.mostrarPainelEmitter.subscribe(
      mostraPainel => this.mostrarPainel = mostraPainel
    );
  }

}
