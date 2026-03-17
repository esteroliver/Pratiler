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

  usuario = signal<IJwtTokenResponse | null>(null);

  autenticarUsuario(data: ILogin){
    this.http.post<IJwtTokenResponse>(this.apiUrl + '/login', data)
    .pipe(
      tap((response: IJwtTokenResponse) => {
        this.usuario.set(response);
      })
    );
  }
  
}
