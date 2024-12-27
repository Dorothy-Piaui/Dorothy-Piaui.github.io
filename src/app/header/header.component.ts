import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    private elem: ElementRef
  ) { }

  ngOnInit(): void {
    if (window.location.pathname === '/contato' ||
      window.location.pathname === '/projetos' ||
      window.location.pathname === '/projetos/cafe-com-tech1' ||
      window.location.pathname === '/projetos/cafe-com-tech2' ) {
      this.elem.nativeElement.querySelector('.navbar')
        .style.backgroundColor = '#FCE0BD';

    }else if(window.location.pathname === '/sobre-nos'){
      this.elem.nativeElement.querySelector('.navbar')
        .style.backgroundColor = '#8D933E';
        
      this.elem.nativeElement.querySelectorAll('.navbar a')
        .forEach((element: HTMLElement) => {
          element.style.color = '#FDFDFB';
        });
    }

  }
}
