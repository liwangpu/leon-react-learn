import { combineReducers } from "redux";
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface RootStoreState {

}

const initialState: RootStoreState = {

}

export const rootStoreSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {

  },
})

export const createReducer = (asyncReducers?: any) => {
  // console.log(`asyncReducers:`, asyncReducers);
  let reducers = {
    [rootStoreSlice.name]: rootStoreSlice.reducer
  };
  if (asyncReducers) {
    reducers = { ...reducers, ...asyncReducers };
  }

  return combineReducers(reducers);
}

