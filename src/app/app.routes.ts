import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Cadastro } from './features/cadastro/cadastro';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'cadastro',
        component: Cadastro
    }
];
