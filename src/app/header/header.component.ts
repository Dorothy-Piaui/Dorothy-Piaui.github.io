import { Component, ElementRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import '@material/web/all.js';
import { windowToggle, windowWhen } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
isMobile: boolean = false;

  constructor(
    private elem: ElementRef,
    private rota: Router
  ) {
    rota.events.subscribe(() => {
      const resolucao = window.innerWidth;

      if (rota.url === '/sobre-nos') {
        this.updateNavbarStyles('#8D933E', '#FDFDFB');
      } else if (rota.url === '/participacoes') {
        this.updateNavbarStyles('#BF213E', '#FDFDFB');
      } else if (rota.url === '/contato' ||
                 rota.url === '/projetos' ||
                 rota.url === '/projetos/cafe-com-tech1' ||
                 rota.url === '/projetos/cafe-com-tech2' ||
                (rota.url === '/' && resolucao <= 768)) {
        this.updateNavbarStyles('#FCE0BD', '#BF213E');          
      }else if (rota.url === '/') {
        this.updateNavbarStyles('', '#BF213E');
      } 
    });

    window.onload = () => {
      this.updateMobileStatus();      
    };

    window.onresize = () => {
      this.updateMobileStatus();
    };
  
  }
 
  private updateNavbarStyles = (navbarColor: string, linkColor: string) => {
    const navbar = this.elem.nativeElement.querySelector('.navbar');
    const links = this.elem.nativeElement.querySelectorAll('.navbar a');
    const menubody = this.elem.nativeElement.querySelector('.offcanvas-body');
    const menubodylink = this.elem.nativeElement.querySelectorAll('.offcanvas-body a');
    const menuheader = this.elem.nativeElement.querySelector('.offcanvas-header');
    const menubotao = this.elem.nativeElement.querySelector('.material-icons-outlined');
    const closebotao = this.elem.nativeElement.querySelector('.offcanvas-header .material-icons-outlined');
    
    if (navbar) {
      navbar.style.backgroundColor = navbarColor;
      menubody.style.backgroundColor = navbarColor;
      menuheader.style.backgroundColor = navbarColor;
      menubotao.style.color = linkColor;
      closebotao.style.color = linkColor;
    }
    links.forEach((element: HTMLElement) => {
      element.style.color = linkColor;
    });

    menubodylink.forEach((element: HTMLElement) => {
      element.style.color = linkColor;
    });
  };

  private updateMobileStatus() {
    const resolucao = window.innerWidth;

    if (resolucao <= 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}