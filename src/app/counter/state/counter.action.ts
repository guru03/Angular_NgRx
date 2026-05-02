import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const createCounterAction = createAction(
  'createCounterAction',
  props<{counter: number}>()
)

export const updateChannelName = createAction(
  'updateChannelName',
  props<{ channelName: string }>()
);


