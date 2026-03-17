import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../../../environments/env.dev';
import { ILeitorPost } from '../model/interfaces/leitor';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private http = inject(HttpClient);
  private apiUrl = env.api + "/usuarios";

  cadastrarUsuarioLeitor(data: ILeitorPost){
    this.http.post(this.apiUrl + '/cadastro/leitor', data);
  }
}
