import { Routes } from '@angular/router';
import { Counter } from './counter/counter/counter';
import { NgRx } from './angular-interview/ng-rx/ng-rx';

export const routes: Routes = [
  {
    path: '',
    component: Counter
  },
  {
    path: 'ngrx',
    component: NgRx,
  },
  { path: '**', redirectTo: '' }                   

];
