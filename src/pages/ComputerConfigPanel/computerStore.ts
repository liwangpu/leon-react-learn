import { createAction, createSlice, createSelector } from '@reduxjs/toolkit';
import * as _ from 'lodash';

export interface ComputerStoreState {
  version: string;
  computers: { id: string; title: string; }[];
  configurations: { [id: string]: { [key: string]: any } };
}

const initialState: ComputerStoreState = {
  version: 'default',
  computers: [],
  configurations: {}
}

export const addComputer = createAction<string>('addComputer');
export const setVerion = createAction<string>('setVerion');

export const store = createSlice({
  name: 'computerStore',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(addComputer, (state, action) => {
      const id = action.payload;
      state.computers[id] = { id };
    });
    builder.addCase(setVerion, (state, action) => {
      state.version = action.payload;
    });
  }
});

interface State {
  computerConfigStore: ComputerStoreState;
}
export const selectStore = (state: State) => state?.computerConfigStore || {};
export const selectVersion = createSelector(selectStore, (state: ComputerStoreState) => state?.version);
export const selectComputers = createSelector(selectStore, (state: ComputerStoreState) => state?.computers || {});
export const selectConfigurations = createSelector(selectStore, (state: ComputerStoreState) => state?.configurations || {});