import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { selectBlogs } from '../state/blogs.selectors';
import { BlogInterface } from '../modals/blogs.modal';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { deleteBlog } from '../state/blogs.actions';

@Component({
  selector: 'app-blog-list',
  imports: [AsyncPipe, RouterLink, RouterOutlet],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
})
export class BlogList {

  // blogs$: Observable<BlogInterface[]> = new Observable<BlogInterface[]>();
  blogs$: Observable<BlogInterface[]> | undefined;

  constructor( private store: Store<AppState>, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.blogs$ = this.store.select(selectBlogs);
  } 

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  onEditBlog(blog: BlogInterface): void {
    console.log('Edit Blog:', blog);
    // Implement edit logic here
  }

  onUpdateBlog(blog: BlogInterface): void {
    console.log('Update Blog:', blog);
    // Implement update logic here
  }

  onDeleteBlog(blogId: string | undefined): void {
    this.store.dispatch(deleteBlog({ blogId }));
  }

}
