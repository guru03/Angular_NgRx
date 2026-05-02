import { QuestionsState } from "../angular-interview/state/questions.state";
import { BlogsState } from "../blogs/state/blogs.state";
import { CounterState } from "../counter/state/counter.state";

export interface AppState {
    counter: CounterState;
    blogs: BlogsState;
    questions: QuestionsState;
}