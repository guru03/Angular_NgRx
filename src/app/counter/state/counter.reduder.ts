

import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { createCounterAction, decrement, increment, reset, updateChannelName } from "./counter.action";

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, counter: 0 })),
  
  on(createCounterAction, ( state, action) => {
    return {
      ...state,
      counter: state.counter + action.counter
    };
  }),


  on(updateChannelName, (state, action) => {
    return { 
      ...state, 
      channelName: action.channelName
    };  
  }),
)

export function counterReducer(state = initialState, action: any) {
  return _counterReducer(state, action);
}