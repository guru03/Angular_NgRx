import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogsState } from "./blogs.state";

const selectBlogState = createFeatureSelector<BlogsState>('blogs');

export const selectBlogs = createSelector(
    selectBlogState,state => {
        return state.blogs;
    }
);

export const selectBlogById = (blogId: string) => createSelector(
    selectBlogState,
    (state: BlogsState) => {
        console.log('Blog ID in selector:', blogId);
        return state.blogs.find(blog => blog.id === blogId) || null;
    }
); 










