import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SobreNosComponent } from "./sobre-nos/sobre-nos.component";
import { ContatoComponent } from "./contato/contato.component";
import { InicialComponent } from "./inicial/inicial.component";
import { ParticipacoesComponent } from './participacoes/participacoes.component';
import { ProjetosComponent } from "./projetos/projetos.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Title } from '@angular/platform-browser';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SobreNosComponent,
    ContatoComponent,
    InicialComponent,
    ParticipacoesComponent,
    ProjetosComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dorothy Piauí';

  constructor(router: Router, titleService: Title) {
    router.events.pipe(
      filter((event) =>
        event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd | any) => {
        console.log('URL ativa: ', event.url);

        switch (event.url) {
          case '/':
            titleService.setTitle('Dorothy Piauí - Página Inicial');
            break;

          case '/sobre-nos':
            titleService.setTitle('Dorothy Piauí - Sobre nós');	
            break;

          case '/contato':
            titleService.setTitle('Dorothy Piauí - Contato');
            break;
            
          case '/projetos':
            titleService.setTitle('Dorothy Piauí - Projetos');
            break;

          case '/participacoes':
            titleService.setTitle('Dorothy Piauí - Participações');
            break;
          
          default:
            titleService.setTitle('Dorothy Piauí');
            break;
        }
      });
  }
}
