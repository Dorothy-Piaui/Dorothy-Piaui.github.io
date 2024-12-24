import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreNosComponent } from "./sobre-nos/sobre-nos.component";
import { ContatoComponent } from "./contato/contato.component";
import { InicialComponent } from "./inicial/inicial.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SobreNosComponent, ContatoComponent, InicialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dorothy Piauí';
}
