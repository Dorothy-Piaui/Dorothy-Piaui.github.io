import { Component, ElementRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    private elem: ElementRef,
    private rota: Router
  ) {
    rota.events.subscribe(() => {
      if (rota.url === '/sobre-nos') {
        this.updateNavbarStyles('#8D933E', '#FDFDFB');
      } else if (rota.url === '/participacoes') {
        this.updateNavbarStyles('#BF213E', '#FDFDFB');
      } else if (rota.url === '/contato' ||
                 rota.url === '/projetos' ||
                 rota.url === '/projetos/cafe-com-tech1' ||
                 rota.url === '/projetos/cafe-com-tech2') {
        this.updateNavbarStyles('#FCE0BD', '#BF213E');
      }
    });
  }
  private updateNavbarStyles = (navbarColor: string, linkColor: string) => {
    const navbar = this.elem.nativeElement.querySelector('.navbar');
    const links = this.elem.nativeElement.querySelectorAll('.navbar a');

    if (navbar) {
      navbar.style.backgroundColor = navbarColor;
    }
    links.forEach((element: HTMLElement) => {
      element.style.color = linkColor;
    });
  };
}
