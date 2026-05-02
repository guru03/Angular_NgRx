import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { addBlog } from '../state/blogs.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { selectBlogById } from '../state/blogs.selectors';
import { BlogInterface } from '../modals/blogs.modal';

@Component({
  selector: 'app-add-blog',
  imports: [ReactiveFormsModule],
  templateUrl: './add-blog.html',
  styleUrl: './add-blog.css',
})
export class AddBlog {
  addBlogForm: FormGroup;
  blog: BlogInterface | undefined;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private routes: ActivatedRoute, private router: Router) {
    this.addBlogForm = this.fb.group({
      title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      content: new FormControl(null, [Validators.required, Validators.minLength(20)]),
    });

    // this.blogFormCreate();

  }

  ngOnInit(): void {
    this.editBlogForm();

    // this.addBlogForm.valueChanges.subscribe(changes => {
    //   this.store.dispatch(updateBlogForm({ changes }));
    // });
  };

  blogFormCreate() {
    this.addBlogForm = this.fb.group({
      title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      content: new FormControl(null, [Validators.required, Validators.minLength(20)]),
    });
  }

  onAddPost(): void {
    if (this.addBlogForm.invalid) {
      return;
    }

    const blogData = {
      title: this.addBlogForm.value.title,
      content: this.addBlogForm.value.content
    };

    this.store.dispatch(addBlog({ blog: blogData }));
    this.addBlogForm.reset();

    this.router.navigate(['/blogs']);
  }

  editBlogForm() {
    this.routes.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('Blog ID from route:', id);

      if (id) {
        this.store.select(selectBlogById(id)).subscribe(blog => {
          if (blog) {
            console.log('Blog details:', blog);
            this.blog = blog;
            this.addBlogForm.patchValue({
              title: blog.title,
              content: blog.content
            });
          }
        });
      }
    });
  }

}
