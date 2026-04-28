

import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { decrement, increment, reset, setCounterData, updateChannelName } from "./counter.action";

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, counter: 0 })),
  
  on(setCounterData, ( state, action) => {
    return {
      ...state,
      counter: state.counter + action.counter
    };
  }),


  on(updateChannelName, (state) => {
    return { 
      ...state, 
      channelName: "Angular_NgRx_updated"
    };  
  }),
)

export function counterReducer(state = initialState, action: any) {
  return _counterReducer(state, action);
}