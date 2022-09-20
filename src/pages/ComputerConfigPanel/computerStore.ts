import { createAction, createSlice, createSelector } from '@reduxjs/toolkit';
import * as _ from 'lodash';

export interface ComputerStoreState {
  version: string;
  computers: { id: string; title: string; }[];
  configurations: { [id: string]: { [key: string]: any } };
}

const initialState: ComputerStoreState = {
  version: 'default',
  computers: [
    { id: 'a', title: '戴尔' },
    { id: 'b', title: '外星人' },
    { id: 'c', title: '苹果' },
  ],
  configurations: {}
}

export const updateComputer = createAction<{ id: string, title: string }>('computerStore/updateComputer');
export const setVerion = createAction<string>('computerStore/setVerion');

export const store = createSlice({
  name: 'computerStore',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(updateComputer, (state, action) => {
      const computer = state.computers.find(c => c.id === action.payload.id);
      computer.title = action.payload.title;
    });
    builder.addCase(setVerion, (state, action) => {
      state.version = action.payload;
    });
  }
});

interface State {
  computerStore: ComputerStoreState;
}
export const selectStore = (state: State) => state?.computerStore || {};
export const selectVersion = createSelector(selectStore, (state: ComputerStoreState) => state?.version);
export const selectComputers = createSelector(selectStore, (state: ComputerStoreState) => state?.computers || []);
export const selectConfigurations = createSelector(selectStore, (state: ComputerStoreState) => state?.configurations || {});