import { createAction, props } from "@ngrx/store";
import { BlogInterface } from "../modals/blogs.modal";

export const ADD_BLOG_ACTION = '[BLOG] Add Blog';
export const DELETE_BLOG_ACTION = '[BLOG] Delete Blog';



export const addBlog = createAction(
    ADD_BLOG_ACTION, 
    props<{ blog: BlogInterface }>()
);


export const deleteBlog = createAction(
    DELETE_BLOG_ACTION, 
    props<{ blogId: string | undefined }>()
);



// testing

export const loadBlogForEdit = createAction(
  '[Blog] Load Blog For Edit',
  props<{ blog: BlogInterface }>()
);

export const updateBlogForm = createAction(
  '[Blog] Update Blog Form',
  props<{ changes: Partial<BlogInterface> }>()
);

export const saveBlogForm = createAction('[Blog] Save Blog Form');  