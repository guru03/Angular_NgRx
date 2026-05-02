import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { blogsReducer } from "../blogs/state/blogs.reducer";
import { counterReducer } from "../counter/state/counter.reduder";
import { questionReducer } from "../angular-interview/state/question.reducer";

export const appReducer: ActionReducerMap<AppState> = {
    counter: counterReducer,
    blogs: blogsReducer,
    questions: questionReducer
}