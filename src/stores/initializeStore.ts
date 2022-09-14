import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { createReducer } from "./rootReducer";

interface EnhancedStoreExtension {
  asyncReducers: { [key: string]: any };
  injectReducer: (key: string, reducer: { [key: string]: any }) => EnhancedStore;
};

export const initializeStore = () => {
  // createStore returns a plain object so we'll mess with it after creation.
  const store: EnhancedStore & EnhancedStoreExtension = configureStore({
    reducer: createReducer(),
    devTools: true
  }) as any;
  // Create an object for any later reducers
  store.asyncReducers = {};

  // Creates a convenient method for adding reducers later
  // See withReducer.js for this in use.
  store.injectReducer = (key, reducer) => {
    // Updates the aysncReducers object. This ensures we don't remove any old
    // reducers when adding new ones.
    store.asyncReducers[key] = reducer;
    // This is the key part: replaceReducer updates the reducer
    // See rootReducer.createReducer for more details, but it returns a function.
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  return store;
};