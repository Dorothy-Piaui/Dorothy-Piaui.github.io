import { Component } from '@angular/core';

export interface Participante {
  nome: string;
  cargo: string;
  imagem: string;
  descricao: string;
}

export Enum Diretoria{
  GERAL = 1,

}

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css'],
})
export class SobreNosComponent {
  participantes: Participante[] = [
    {
      nome: 'Maria Silva',
      diretoria: 'Desenvolvedora Front-end',
      imagem: 'assets/imagens/maria.jpg',
      descricao: 'Especialista em Angular e experiência do usuário.',
    },
    {
      nome: 'João Souza',
      cargo: 'Desenvolvedor Back-end',
      imagem: 'assets/imagens/joao.jpg',
      descricao: 'Focado em APIs REST e banco de dados.',
    },
  ];
}
