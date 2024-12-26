import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreNosComponent } from "./sobre-nos/sobre-nos.component";
import { ContatoComponent } from "./contato/contato.component";
import { InicialComponent } from "./inicial/inicial.component";
import { ParticipacoesComponent } from './participacoes/participacoes.component';
import { ProjetosComponent } from "./projetos/projetos.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SobreNosComponent,
    ContatoComponent,
    InicialComponent,
    ParticipacoesComponent,
    ProjetosComponent,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dorothy Piauí';
}
