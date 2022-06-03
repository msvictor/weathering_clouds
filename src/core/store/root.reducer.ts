import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';

import { modules } from '#modules/store/modules.reducer';

const combinedReducers = combineReducers({
  modules,
});

type RootState = ReturnType<typeof combinedReducers>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return combinedReducers(state, action);
};

export default rootReducer;
