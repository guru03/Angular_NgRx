import { Routes } from '@angular/router';
import { Counter } from './counter/counter/counter';
import { NgRx } from './angular-interview/ng-rx/ng-rx';
import { Home } from './home/home';
import { BlogList } from './blogs/blog-list/blog-list';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { AddBlog } from './blogs/add-blog/add-blog';

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
    component: Counter,
  },
  {
    path: 'blogs',
    component: BlogList,
    children: [
      {
        path: 'add-blog',
        component: AddBlog
      },
      {
        path: 'edit/:id',
        component: AddBlog
      }
    ]
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
