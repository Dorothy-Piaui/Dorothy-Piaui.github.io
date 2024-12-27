import { Component, inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nome: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    telefone: ['', Validators.required, Validators.minLength(11)],
    assunto: ['', Validators.required],
    messagem: ['', Validators.required]
  });

  onSubmit(): void {
    console.warn(this.form.value);
    
  }
}
