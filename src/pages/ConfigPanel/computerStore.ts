import { createAction, createSlice, createSelector } from '@reduxjs/toolkit';
import * as _ from 'lodash';

export interface ComputerStoreState {
  computers: { [id: string]: { [key: string]: any } };
  configurations: { [id: string]: { [key: string]: any } };
}

const initialState: ComputerStoreState = {
  computers: {},
  configurations: {}
}

export const addComputer = createAction<string>('addComputer');

export const store = createSlice({
  name: 'computerConfigStore',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(addComputer, (state, action) => {
      const id = action.payload;
      state.computers[id] = { id };
    })
  }
});
interface State {
  computerConfigStore: ComputerStoreState;
}

export const selectComputers = (state: State) => state.computerConfigStore.computers;
