import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Title } from '@angular/platform-browser';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
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
