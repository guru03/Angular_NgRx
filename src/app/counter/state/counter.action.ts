import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const setCounterData = createAction(
  'setCounterData',
  props<{counter: number}>()
)

export const updateChannelName = createAction(
  'updateChannelName',
  
);


