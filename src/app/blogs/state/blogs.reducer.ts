import { createReducer, on } from "@ngrx/store";
import { initialState } from "./blogs.state";
import { addBlog, deleteBlog, loadBlogForEdit, updateBlogForm } from "./blogs.actions";

const _blogReducer = createReducer(
    initialState,
    on(addBlog, (state, action) => {
        let blog = { ...action.blog };
        blog.id = (state.blogs.length + 1).toString(); // Assign a unique ID based on the current length of the blogs array
        return {
            ...state,
            blogs: [...state.blogs, action.blog]
        }
    },

    ),
    on(loadBlogForEdit, (state, action) => {
        return {
            ...state,
            blogs: state.blogs.map(blog => blog.id === action.blog.id ? { ...blog, ...action.blog } : blog)
        };
    }),

    on(deleteBlog, (state, action) => {
        return {
            ...state,
            blogs: state.blogs.filter(blog => blog.id !== action.blogId)
        }
    }),




    on(updateBlogForm, (state, action) => ({ ...state, ...action.changes }))
);

export function blogsReducer(state = initialState, action: any) {
    return _blogReducer(state, action);
}