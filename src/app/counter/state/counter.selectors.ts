import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { CounterState } from "./counter.state";

const selectCounterState = createFeatureSelector<CounterState>('counter');

export const selectCounterValue = createSelector(
  selectCounterState, (state) => {
    return state.counter;
  }
);

export const selectChannelName = createSelector(
  selectCounterState, (state) => {
    return state.channelName;
  }
);