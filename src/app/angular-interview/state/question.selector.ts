import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuestionsState } from "./questions.state";

const selectQuestionState = createFeatureSelector<QuestionsState>('questions');

export const selectQuestions = createSelector(
  selectQuestionState, (state: QuestionsState) => {
    return state.questions;
  }
);