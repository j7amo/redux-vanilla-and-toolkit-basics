/* eslint-disable no-param-reassign,no-plusplus */
import { configureStore, createSlice } from '@reduxjs/toolkit';

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

// 'configureStore' accepts an object with different options most of which are OPTIONAL
// except 'reducer' option which is mandatory! It should point to:
// 1) a reducer of the slice
// OR
// 2) an object which maps to several slices with corresponding reducers (e.g.
// { counterReducer: counterSlice.reducer, nameReducer: nameSlice.reducer})
const store = configureStore({
  // because we have only one slice we can point directly to it without any mapping object:
  reducer: counterSlice.reducer,
});

// a slice object exposes 'actions' property which holds automatically generated
// action creators (when we call them somewhere in the app they will return an
// action object with type="slice_name/action_name" (e.g. "counter/increment"),
// so we need to export these action creators:
export const {
  increment, decrement, increaseByAmount, toggleCounter,
} = counterSlice.actions;
export default store;

// // vanilla Redux approach
// // 1) define default state
// const defaultState = {
//   counter: 0,
//   isShown: true,
// };
//
// // 2) define a reducer function to handle state updates
// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case 'increment': {
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     }
//     case 'increase_by_value': {
//       return {
//         ...state,
//         counter: state.counter + action.payload,
//       };
//     }
//     case 'decrement': {
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     }
//     case 'toggle_counter': {
//       return {
//         ...state,
//         isShown: !state.isShown,
//       };
//     }
//     default:
//       return state;
//   }
// };
//
// // 3) and finally create a store
// const store = createStore(counterReducer, defaultState);
//
// // This is all good BUT it's kind of an old-fashioned way of working with Redux
// // and this approach has its CONS:
// // 1) Action names collisions
// // 2) Action names possible typos when dispatching them somewhere inside components
// // 3) Remembering the fact that we need to constantly check if are not mutating the state
// // 4) If the state has nested reference types, reducers tend to grow bigger because
// // we have to basically use spread operators on EVERY nested reference type, and it's
// // easy to miss something and forget to spread some nested array/object.
