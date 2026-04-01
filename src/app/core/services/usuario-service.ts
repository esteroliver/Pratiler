import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../../../environments/env.dev';
import { ILeitorPost } from '../model/interfaces/leitor';
import { ILogin } from '../model/interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private http = inject(HttpClient);
  private apiUrl = env.api + "/usuarios";

  cadastrarUsuarioLeitor(data: ILeitorPost){
    this.http.post(this.apiUrl + '/cadastro/leitor', data);
  }

  login(data: ILogin){
    this.http.post(this.apiUrl + '', data);
  }
}
