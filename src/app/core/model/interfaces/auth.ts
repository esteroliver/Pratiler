import { PapelUsuario } from "../enums/leitor";

export interface ILogin {
    email: string;
    senha: string;
}

export interface IJwtTokenResponse {
    token: string;
    email: string;
    papelUsuario: PapelUsuario;
}