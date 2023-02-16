/* eslint-disable no-param-reassign,no-plusplus */
import { createSlice } from '@reduxjs/toolkit';

// Redux Toolkit approach
// 1) create a state slice
const counterSlice = createSlice({
  // 1.1) it should have a name (will be used as a prefix for action dispatch)
  name: 'counter',
  // 1.2) initial state (used as a starting point)
  initialState: {
    counter: 0,
    isShown: true,
  },
  // 1.3) reducers (used for state updating)
  // by the way we can write the logic mutating way, although we are not really mutating it
  // (this is ensured by Immer library which detects such operations,
  // clones the state under the hood and applies changes immutably)
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseByAmount(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.isShown = !state.isShown;
    },
  },
  // so we have configured our counterSlice, and it's pretty obvious that
  // this is a much more concise way of writing Redux logic
});

// a slice object exposes 'actions' property which holds automatically generated
// action creators (when we call them somewhere in the app they will return an
// action object with type="slice_name/action_name" (e.g. "counter/increment"),
// so we need to export these action creators:
export const {
  increment, decrement, increaseByAmount, toggleCounter,
} = counterSlice.actions;

// it also exposes reducer (we'll need it later in store.js file)
export default counterSlice.reducer;
