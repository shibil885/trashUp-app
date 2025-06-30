import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadingState } from './loading.reducer';

export const selectLoadingState =
  createFeatureSelector<LoadingState>('loading');

export const selectLoading = createSelector(selectLoadingState, (s) => s);
