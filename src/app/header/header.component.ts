import { style } from '@angular/animations';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    if (window.location.pathname === '/contato' ||
      window.location.pathname === '/projetos') {
      this.elem.nativeElement.querySelector('.navbar')
        .style.backgroundColor = '#FCE0BD';

    }
  }
}
