import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputDirective } from '../../shared/directives/input-directive';
import { BotaoGenerico } from '../../shared/components/botao-generico/botao-generico';
import { UsuarioService } from '../../core/services/usuario-service';
import { confirmarSenhaValidator } from '../../shared/validators/confirmar-senha-validator';
import { ILeitorPost } from '../../core/model/interfaces/leitor';

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
  private usuarioService = inject(UsuarioService);

  form! : FormGroup;

  ngOnInit(){
    this.form = this.fb.group({
      nome: [null, [Validators.required]],
      biografia: [null],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
      confirmarSenha: [null, [Validators.required]]
    }, {
      validators: confirmarSenhaValidator
    });
  }

  submit(){
    if(this.form.valid){
      const leitorData : ILeitorPost = {
        nome: this.form.get('nome')?.value,
        biografia: this.form.get('biografia')?.value,
        email: this.form.get('email')?.value,
        senha: this.form.get('senha')?.value
      };

      this.usuarioService.cadastrarUsuarioLeitor(leitorData).subscribe({
        next: () => {
          console.log('Usuário cadastrado com sucesso!');
        },
        error: (err) => {
          console.error('Erro ao cadastrar usuário: ', err);
        }
      });
    }
  }

}
