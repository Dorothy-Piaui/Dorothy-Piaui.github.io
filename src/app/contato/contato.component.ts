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
    mensagem: ['', Validators.required]
  });

  onSubmit(): void {
    if (this.form.valid) {      
      const dados = this.form.value;
      this.enviarEmail(dados);
    }     
  }
  enviarEmail(dados: any) {
    console.log(dados);
    
    const url = 'https://api.email.com.br';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(dados)
    }).then(response => {
      console.log('E-mail enviado com sucesso');
    }).catch(error => {
      console.error('Erro ao enviar e-mail');
    });

  }
}
