import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { enableDebugTools } from '@angular/platform-browser';

interface Eventos {
  titulo: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-inicial',
  imports: [
    RouterLink, 
    CommonModule
  ],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.css'
})

export class InicialComponent {
  isMobile: boolean = false;
  isDesktop: boolean = true;

  eventos: Eventos[];

  constructor() {
    window.addEventListener('resize', this.toggleMenu);
    this.eventos = this.carregarEventos();

    window.onresize = () => {
      this.updateWindowStatus();
    };
  }

  private toggleMenu = () => {
    const resolucao = window.innerWidth;

    if (resolucao <= 768) {
      this.isMobile = true;

    } else {
      this.isMobile = false;
    }
  };

  private carregarEventos: () => Eventos[] = () => {
    return [
      {
        titulo: '20ª Semana Nacional de Ciência e Tecnologia',
        descricao: 'A Semana Nacional de Ciência e Tecnologia é um evento que tem como objetivo promover a ' +
        'integração entre os alunos dos cursos de Tecnologia da Informação e a comunidade externa.',
        imagem: 'assets/images/eventos/snct.png'
      },
      {
        titulo: 'Campus Weekend Piauí 2024',
        descricao: 'O Campus Weekend é um evento que tem como objetivo promover a integração entre os alunos dos' +
        'cursos de Tecnologia da Informação e a comunidade externa.',
        imagem: 'assets/images/eventos/CPWeekendPI.jpg'
      },
      {
        titulo: 'II Semana da Diversidade da Estácio Teresina',
        descricao: 'A Semana da Diversidade é um evento que tem como objetivo promover a integração entre os alunos' +
        'dos cursos de Tecnologia da Informação e a comunidade externa.',
        imagem: 'assets/images/eventos/SD-Estácio-The.png'
      }
      
    ];
  };

  private updateWindowStatus = () => {
    if (window.innerWidth <= 768) {
      this.isMobile = true;
      this.isDesktop = false;
    } else if(window.innerWidth <= 1082) {
      this.isMobile = false;
      this.isDesktop = false;
    }else if (window.innerWidth > 1082) {
      this.isMobile = false;
      this.isDesktop = true;
    }
  }
};
