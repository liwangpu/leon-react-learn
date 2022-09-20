import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import * as _ from 'lodash';
import { faker } from '@faker-js/faker';

export interface CounterState {
  value: number,
  vender: { title: string; phone: string }
}

const initialState: CounterState = {
  value: 1,
  vender: { title: '华工', phone: '110110' }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      // state.vender.title = faker.name.fullName();
    },
    decrement: (state) => {
      state.value -= 1
    },
    resetStore: (state) => {
      state = _.cloneDeep(initialState);
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
});

interface State {
  counter: CounterState;
}

export const selectStore = (state: State) => state.counter;
export const selectCountValue = createSelector(selectStore, state => state.value);
export const selectVender = createSelector(selectStore, state => state.vender);

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice;