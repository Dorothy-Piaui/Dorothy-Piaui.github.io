import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-inicial',
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.css'
})
export class InicialComponent {

}
