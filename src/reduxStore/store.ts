import { combineReducers } from "redux";
import { configureStore, createSlice, EnhancedStore } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


const createReducer = (asyncReducers?: any) => {
  let reducers = {
    root: function (state, action) {
      if (state == null) {
        state = {};
      }
      return state;
    }
  };
  if (asyncReducers) {
    reducers = { ...reducers, ...asyncReducers };
  }

  return combineReducers(reducers);
}

interface EnhancedStoreExtension extends EnhancedStore {
  asyncReducers: { [key: string]: any };
  injectReducer: (key: string, reducer: { [key: string]: any }) => EnhancedStore;
};


export const store = configureStore({
  reducer: createReducer(),
  devTools: true
});
// Create an object for any later reducers

const storeExt: EnhancedStoreExtension = store as any;
storeExt.asyncReducers = {};

// Creates a convenient method for adding reducers later
// See withReducer.js for this in use.
storeExt.injectReducer = (key, reducer) => {
  // Updates the aysncReducers object. This ensures we don't remove any old
  // reducers when adding new ones.
  storeExt.asyncReducers[key] = reducer;
  // This is the key part: replaceReducer updates the reducer
  // See rootReducer.createReducer for more details, but it returns a function.
  storeExt.replaceReducer(createReducer(storeExt.asyncReducers));
  return storeExt;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

