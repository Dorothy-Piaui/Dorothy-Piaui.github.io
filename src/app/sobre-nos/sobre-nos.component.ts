import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Participante {
  nome: string;
  diretoria: string;
  imagem: string;
  descricao: string;
}

export enum Diretoria {
  GERAL = 1,
  EXTENSAO_EVENTOS = 2,
  IMPRENSA = 3,
  FINANCEIRA = 4,
  PRODUTOS = 5,
  CONEXAO_PROJETOS = 6,
}

export interface Descricao {
  texto: string;
  participante: string;
}

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class SobreNosComponent {
  imagens = 'assets/images/participantes';

  diretorias = [
    'Diretor Geral',
    'Diretor de Imprensa',
    'Diretor de Extensão e Eventos',
    'Diretor Financeiro',
    'Diretor de Produtos',
    'Diretor de Conexão e Projetos',
  ];

  descricoes: Descricao[] = [
    {
      texto:
        'Estudante de ciência da computação com foco em desenvolvimento Fullstack. Apaixonada por neurotecnologia, inovação e aprendizado contínuo.',
      participante: 'Larissa Brasil',
    },
    {
      texto:
        'Estudante de Gestão de Dados, com foco em análise de dados e Backend. Apaixonada por um bom filme de romance e uma amante voraz de capuccino.',
      participante: 'Talita Matos',
    },
    {
      texto:
        'Uma aspirante a cientista de dados, fascinada pelo universo do terror e que prefere tudo que é de morango ou maracujá ao invés de chocolate.',
      participante: 'Ana Letícia',
    },
    {
      texto:
        'Estudante de programação com foco em Front-end, leitora compulsiva e criadora de conteúdo nas horas vagas.',
      participante: 'Lúcia de Fátima',
    },
    {
      texto:
        'Uma jovem padawan trilhando seu caminho no universo da computação, com foco em Front-end e aprimorando suas habilidades em UX/UI design. Nas horas vagas, viaja por galáxias distantes através dos livros e do universo geek, sempre na companhia de seu fiel gato, Peter Parker.',
      participante: 'Carol Santos',
    },
    {
      texto:
        'Sou aspirante a desenvolvimento back-end, apaixonada por programação, mãe da Anne e adoro praticar esportes',
      participante: 'Monnik Luianne',
    },
    {
      texto:
        'Aluna de Ciência da Computação na UFPI, técnico em informática e aspirante a escritora. Atualmente busca a área de ciência de dados no ramo forense.',
      participante: 'Thayssa Fernanda',
    },
  ];

  participantes: Participante[] = [
    // Diretoria Geral
    {
      nome: 'Larissa Brasil',
      diretoria: this.mapToCargo(Diretoria.GERAL),
      imagem: `${this.imagens}/larissa-brasil.jpg`,
      descricao: this.mapToDescricao('Larissa Brasil'),
    },
    {
      nome: 'Suzana Silva',
      diretoria: this.mapToCargo(Diretoria.GERAL),
      imagem: `${this.imagens}/Suzana-Silva.jpg`,
      descricao: this.mapToDescricao('Suzana Silva'),
    },
    {
      nome: 'Thayssa Fernanda',
      diretoria: this.mapToCargo(Diretoria.GERAL),
      imagem: `${this.imagens}/thayssa-fernanda.jpg`,
      descricao: this.mapToDescricao('Thayssa Fernanda'),
    },

    // Diretoria de Imprensa
    {
      nome: 'Carol Santos',
      diretoria: this.mapToCargo(Diretoria.IMPRENSA),
      imagem: `${this.imagens}/carol-santos.jpg`,
      descricao: this.mapToDescricao('Carol Santos'),
    },
    {
      nome: 'Iara Vasconcelos',
      diretoria: this.mapToCargo(Diretoria.IMPRENSA),
      imagem: `${this.imagens}/iara-vasconcelos.jpg`,
      descricao: this.mapToDescricao('Iara Vasconcelos'),
    },
    {
      nome: 'Laura Aparecida',
      diretoria: this.mapToCargo(Diretoria.IMPRENSA),
      imagem: `${this.imagens}/laura-aparecida.webp`,
      descricao: this.mapToDescricao('Laura Aparecida'),
    },
    {
      nome: 'Lúcia de Fátima',
      diretoria: this.mapToCargo(Diretoria.IMPRENSA),
      imagem: `${this.imagens}/lucia-de-fatima.JPEG`,
      descricao: this.mapToDescricao('Lúcia de Fátima'),
    },
    {
      nome: 'Maria Ingrid',
      diretoria: this.mapToCargo(Diretoria.IMPRENSA),
      imagem: `${this.imagens}/Maria-Ingrid.jpg`,
      descricao: this.mapToDescricao('Maria Ingrid'),
    },
    {
      nome: 'Monnik Luianne',
      diretoria: this.mapToCargo(Diretoria.IMPRENSA),
      imagem: `${this.imagens}/Monnik-Luianne.webp`,
      descricao: this.mapToDescricao('Monnik Luianne'),
    },
    {
      nome: 'Nicole Ellen',
      diretoria: this.mapToCargo(Diretoria.IMPRENSA),
      imagem: `${this.imagens}/nicole-silvestre.webp`,
      descricao: this.mapToDescricao('Nicole Ellen'),
    },
    {
      nome: 'Talita Matos',
      diretoria: this.mapToCargo(Diretoria.IMPRENSA),
      imagem: `${this.imagens}/talita-matos.jpg`,
      descricao: this.mapToDescricao('Talita Matos'),
    },

    // Diretoria de Extensão e Eventos
    {
      nome: 'Adélia Mara',
      diretoria: this.mapToCargo(Diretoria.EXTENSAO_EVENTOS),
      imagem: `${this.imagens}/adelia-carvalho.jpeg`,
      descricao: this.mapToDescricao('Adélia Mara'),
    },
    {
      nome: 'Arielly Cristiny',
      diretoria: this.mapToCargo(Diretoria.EXTENSAO_EVENTOS),
      imagem: `${this.imagens}/Arielly-Cristiny.jpeg`,
      descricao: this.mapToDescricao('Arielly Cristiny'),
    },

    // Diretoria Financeira
    {
      nome: 'Ana Letícia',
      diretoria: this.mapToCargo(Diretoria.FINANCEIRA),
      imagem: `${this.imagens}/ana-leticia.png`,
      descricao: this.mapToDescricao('Ana Letícia'),
    },

    // Diretoria de Produtos
    {
      nome: 'Ana Beatriz',
      diretoria: this.mapToCargo(Diretoria.PRODUTOS),
      imagem: `${this.imagens}/Ana-Beatriz.jpg`,
      descricao: this.mapToDescricao('Ana Beatriz'),
    },
    // Diretoria de Conexão e Projetos
    {
      nome: 'Diana',
      diretoria: this.mapToCargo(Diretoria.CONEXAO_PROJETOS),
      imagem: `${this.imagens}/diana.jpg`,
      descricao: this.mapToDescricao('Diana'),
    },
  ];

  mapToCargo(diretoria: Diretoria): string {
    switch (diretoria) {
      case Diretoria.GERAL:
        return 'Diretor Geral';
      case Diretoria.EXTENSAO_EVENTOS:
        return 'Diretor de Extensão e Eventos';
      case Diretoria.IMPRENSA:
        return 'Diretor de Imprensa';
      case Diretoria.FINANCEIRA:
        return 'Diretor Financeiro';
      case Diretoria.PRODUTOS:
        return 'Diretor de Produtos';
      case Diretoria.CONEXAO_PROJETOS:
        return 'Diretor de Conexão e Projetos';
    }
  }
  mapToDescricao(nome: string): string {
    return (
      this.descricoes.find((descricao) => descricao.participante === nome)
        ?.texto || ''
    );
  }
}
