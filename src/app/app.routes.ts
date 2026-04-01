import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Cadastro } from './features/cadastro/cadastro';
import { Home } from './features/home/home';
import { authGuard } from './core/guard/auth-guard';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'cadastro',
        component: Cadastro
    },
    {
        path: 'home',
        component: Home,
        canActivate: [authGuard]
    }
];
