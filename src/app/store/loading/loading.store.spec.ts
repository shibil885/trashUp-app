import { createAction } from '@ngrx/store';
import { hideLoading, showLoading } from './loading.action';
import { loadingReducerFn, LoadingState } from './loading.reducer';

describe('Loading Store', () => {
    
  it('should show loading', () => {
    const initialState: LoadingState = { show: false };

    const newState = loadingReducerFn(initialState, showLoading());

    expect(newState).toEqual({ show: true });
  });

  it('should hide loading', () => {
    const initialState: LoadingState = { show: true };

    const newState = loadingReducerFn(initialState, hideLoading());

    expect(newState).toEqual({ show: false });
  });

  it('should keep loading when action is unknown', () => {
    const initialState: LoadingState = { show: true };
    const newAction = createAction('UNKNOWN');
    const newState = loadingReducerFn(initialState, newAction());

    expect(newState).toEqual({ show: true });
  });
});
