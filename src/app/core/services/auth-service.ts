import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../environments/env.dev';
import { ILogin } from '../model/interfaces/auth';
import { ILeitorPost } from '../model/interfaces/leitor';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = env.api + "/auth"

  autenticarUsuario(data: ILogin){
    this.http.post(this.apiUrl + '/login', data);
  }
  
  cadastroUsuarioLeitor(data: ILeitorPost){
    this.http.post(this.apiUrl + '/cadastro/leitor', data);
  }
}
