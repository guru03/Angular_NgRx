import { Routes } from '@angular/router';
import { NgRx } from './angular-interview/ng-rx/ng-rx';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { SignalComponent } from './signals/SignalComponent';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'dashboard',
    component: Home
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'Angular-Interview',
    component: NgRx,
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('./counter/counter/counter').then(m => m.Counter)
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./blogs/blogs-routes').then(m => m.routes)
  },

  {
    path: 'about',
    component: About,
  },
  {
    path: 'signals',
    component: SignalComponent,
  },
  {
    path: 'contact',
    component: Contact,
  },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', redirectTo: 'home', pathMatch: 'full' },

];
