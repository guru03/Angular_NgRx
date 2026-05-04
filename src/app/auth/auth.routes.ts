import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { PasswordRecovery } from "./password-recovery/password-recovery";
import { Register } from "./register/register";

export const AUTH_ROUTES: Routes = [
    { path: 'login', component: Login },
    { path: 'sign-up', component: Register },
    { path: 'password-recovery', component: PasswordRecovery }
];