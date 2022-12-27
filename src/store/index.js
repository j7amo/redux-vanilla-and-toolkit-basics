/* eslint-disable no-param-reassign,no-plusplus */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';

// 'configureStore' accepts an object with different options most of which are OPTIONAL
// except 'reducer' option which is mandatory! It should point to:
// 1) a reducer of the slice
// OR
// 2) an object which maps to several slices with corresponding reducers (e.g.
// { counterReducer: counterSlice.reducer, nameReducer: nameSlice.reducer})
const store = configureStore({
  // because we have only one slice we can point directly to it without any mapping object:
  // reducer: counterSlice.reducer,

  // but now when we have multiple slices we should point to a mapping object
  // with KEYS of our choice. We will access corresponding slices by these names (e.g.
  // state.counter OR state.auth). This is merged into one big root reducer behind the scenes.
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

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
