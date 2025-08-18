import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private elem: ElementRef,
    private rota: Router
  ) {
    rota.events.subscribe(() => {
      if (rota.url === '/sobre-nos') {
        this.updateStylesAndIcons('#8D933E', '#FDFDFB', 'white');
      } else if (rota.url === '/participacoes') {
        this.updateStylesAndIcons('#BF213E', '#FDFDFB', 'white');

      } else if (rota.url === '/projetos' ||
        rota.url === '/projetos/cafe-com-tech1' ||
        rota.url === '/projetos/cafe-com-tech2' ||
        rota.url === '/contato' ||
        rota.url === '/') {
        this.updateStylesAndIcons('#FCE0BD', '#BF213E', 'red');
      }
    });
  }

  get returnaAno() {
    return new Date().getFullYear();
  }

  private updateStylesAndIcons(color: string, fontColor: string, iconColor: string): void {
    const iconsPath = '/assets/images/icons/';

    let iconColorSuffix: string;

    if(iconColor === 'white') {
      iconColorSuffix = '-white.png';
    } else if(iconColor === 'red') {
      iconColorSuffix = '-red.png';
    }

    this.elem.nativeElement.querySelector('footer').style.backgroundColor = color;
    this.elem.nativeElement.querySelector('.centro p').style.color = fontColor;

    ['instagram', 'linkedin', 'github', 'gmail'].forEach(icon => {
      this.elem.nativeElement.querySelector(`.${icon}`).src = `${iconsPath}${icon}${iconColorSuffix}`;
    });
  }
}
