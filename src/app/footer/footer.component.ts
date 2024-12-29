import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private elem: ElementRef) { }

  get returnaAno() {  
    return new Date().getFullYear();
  }

  ngOnInit(): void {
    if(window.location.pathname === '/sobre-nos'){
      this.elem.nativeElement.querySelector('footer')
        .style.backgroundColor = '#8D933E';
        
      this.elem.nativeElement.querySelector('.centro p')
        .style.color = '#FDFDFB';
        
      this.elem.nativeElement.querySelector('.instagram')
        .src = '/assets/images/icons/instagram-white.png';
      
      this.elem.nativeElement.querySelector('.linkedin')
        .src = '/assets/images/icons/linkedin-white.png';
        
      this.elem.nativeElement.querySelector('.github')
        .src = '/assets/images/icons/github-white.png';
      
      this.elem.nativeElement.querySelector('.gmail')
        .src = '/assets/images/icons/gmail-white.png';
    }else if(window.location.pathname === '/participacoes'){
      this.elem.nativeElement.querySelector('footer')
        .style.backgroundColor = '#BF213E';
        
      this.elem.nativeElement.querySelector('.centro p')
        .style.color = '#FDFDFB';
        
      this.elem.nativeElement.querySelector('.instagram')
        .src = '/assets/images/icons/instagram-white.png';
      
      this.elem.nativeElement.querySelector('.linkedin')
        .src = '/assets/images/icons/linkedin-white.png';
        
      this.elem.nativeElement.querySelector('.github')
        .src = '/assets/images/icons/github-white.png';
      
      this.elem.nativeElement.querySelector('.gmail')
        .src = '/assets/images/icons/gmail-white.png';      
    }
  }

}
