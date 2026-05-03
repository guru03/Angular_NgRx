import { Routes } from '@angular/router';
import { NgRx } from './angular-interview/ng-rx/ng-rx';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'ngrx',
    component: NgRx,
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('./counter/counter/counter').then(m => m.Counter)
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./blogs/blogs/blogs-routes').then(m => m.routes)
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];
