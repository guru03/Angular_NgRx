import { Routes } from '@angular/router';
import { AddBlog } from './add-blog/add-blog';
import { Blogs } from './blogs/blogs';


export const routes: Routes = [
    {
        path: '',
        component: Blogs,
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

];
