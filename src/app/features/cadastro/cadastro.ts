import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputDirective } from '../../shared/directives/input-directive';
import { BotaoGenerico } from '../../shared/components/botao-generico/botao-generico';

@Component({
  selector: 'app-cadastro',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputDirective,
    BotaoGenerico
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})
export class Cadastro {
  private fb = inject(FormBuilder);

  form! : FormGroup;

  ngOnInit(){
    this.form = this.fb.group({
      nome: [null, [Validators.required]],
      biografia: [null],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
      confirmarSenha: [null, [Validators.required]]
    });
  }

}
