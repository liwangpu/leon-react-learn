import { combineReducers } from "redux";
import { configureStore, EnhancedStore, Reducer } from '@reduxjs/toolkit';

const reducers: { [key: string]: Reducer } = {
  root: function (state: any) {
    if (!state) {
      state = {};
    }
    return state;
  }
};

const createReducer = () => {
  return combineReducers(reducers);
}

export interface EnhancedStoreExtension extends EnhancedStore {
  registry: (key: string, reducer: Reducer) => void;
  unRegistry(key: string): void;
};


export const store = configureStore({
  reducer: createReducer(),
  devTools: true
});

const storeExt: EnhancedStoreExtension = store as any;
storeExt.registry = (key, reducer) => {
  if (!key || reducers[key]) {
    return;
  }
  reducers[key] = reducer;
  storeExt.replaceReducer(createReducer());
};

storeExt.unRegistry = key => {
  if (!key || !reducers[key]) {
    return;
  }
  delete reducers[key];
  storeExt.replaceReducer(createReducer());
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

