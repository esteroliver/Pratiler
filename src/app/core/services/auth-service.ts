import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { env } from '../../../environments/env.dev';
import { IJwtTokenResponse, ILogin } from '../model/interfaces/auth';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);
  private apiUrl = env.api + "/auth";

  email = signal<string | null>(sessionStorage.getItem('email'));
  papelUsuario = signal<string | null>(sessionStorage.getItem('papelUsuario'));
  autenticado = signal<boolean>(sessionStorage.getItem('token') !== null);

  login(data: ILogin){
    return this.http.post<IJwtTokenResponse>(this.apiUrl + '/login', data)
    .pipe(
      tap((response: IJwtTokenResponse) => {
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('email', response.email);
        sessionStorage.setItem('papelUsuario', response.papelUsuario);
      })
    );
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  logout(){
    sessionStorage.clear();
    this.email.set(null);
    this.papelUsuario.set(null);
    this.autenticado.set(false);
  }
  
}
