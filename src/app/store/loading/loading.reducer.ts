import { Action, createReducer, on } from '@ngrx/store';
import { hideLoading, showLoading } from './loading.action';

export interface LoadingState {
  show: boolean;
}

const initialState: LoadingState = { show: false };

export const LoadingReducer = createReducer(
  initialState,
  on(showLoading, () => {
    return { show: true };
  }),
  on(hideLoading, () => {
    return { show: false };
  })
);

export function loadingReducerFn(state: LoadingState, action: Action) {
  return LoadingReducer(state, action);
}
