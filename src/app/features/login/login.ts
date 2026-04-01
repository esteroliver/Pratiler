import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputDirective } from '../../shared/directives/input-directive';
import { BotaoGenerico } from '../../shared/components/botao-generico/botao-generico';
import { ILogin } from '../../core/model/interfaces/auth';
import { UsuarioService } from '../../core/services/usuario-service';
import { AuthService } from '../../core/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputDirective,
    BotaoGenerico
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  form! : FormGroup;

  ngOnInit(){
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  submit(){
    const value : ILogin = this.form.value;

    this.authService.login(value).subscribe({
      next: () => {
        console.log('Login bem-sucedido!');
        //this.router.navigate(['home']);
      },
      error: (err) => {
        console.error('Erro ao fazer login: ', err);
      }
    });
  }

}
