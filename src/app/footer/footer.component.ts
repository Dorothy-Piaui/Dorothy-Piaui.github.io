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
        this.updateStylesAndIcons('#8D933E');
      } else if (rota.url === '/participacoes') {
        this.updateStylesAndIcons('#BF213E');

      } else if (rota.url === '/projetos' ||
        rota.url === '/projetos/cafe-com-tech1' ||
        rota.url === '/projetos/cafe-com-tech2') {
        this.updateStylesAndIcons('#FCE0BD');
      }
    });
  }

  get returnaAno() {
    return new Date().getFullYear();
  }

  private updateStylesAndIcons(color: string): void {
    const iconsPath = '/assets/images/icons/';
    const whiteIconSuffix = '-white.png';

    this.elem.nativeElement.querySelector('footer').style.backgroundColor = color;
    this.elem.nativeElement.querySelector('.centro p').style.color = '#FDFDFB';

    ['instagram', 'linkedin', 'github', 'gmail'].forEach(icon => {
      this.elem.nativeElement.querySelector(`.${icon}`).src = `${iconsPath}${icon}${whiteIconSuffix}`;
    });
  }
}
