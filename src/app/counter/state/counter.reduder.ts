

import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.action";
import { intialState } from "./counter.state";

const _counterReducer = createReducer(
  intialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, counter: 0 }))
);

export function counterReducer(state = intialState, action: any) {
  return _counterReducer(state, action);
}