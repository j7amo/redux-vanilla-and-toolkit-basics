import React from 'react';
// import * as PropTypes from 'prop-types';
// 1) useSelector hook is a hook from 'react-redux' library.
// it is used for "connection"/subscription of React components to the Redux store in general,
// and also we can use it to select only those state slices that we are interested in
// by passing the selector function to the hook. It's like we are
// using 'state' that we get from using 'useState' hook.
// 2) useDispatch hook is also a hook from 'react-redux' library.
// it is used for dispatching/sending actions (or action objects)
// to the Redux store reducer function to update state. It's like we are
// using 'setState' from useState hook.
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increaseByAmount,
  increment,
  toggleCounter,
} from '../store';
import classes from './Counter.module.css';

function Counter() {
  // Previously we uncovered that there can be different reasons for component re-evaluation:
  // 1) Parent component re-evaluation
  // 2) Props changed
  // 3) State changed
  // 4) Context changed
  // And now there's ONE MORE REASON for re-evaluation:
  // 5) Redux store change which makes useSelector return a new value to the component
  const counter = useSelector((state) => state.counter);
  const isShown = useSelector((state) => state.isShown);
  const dispatch = useDispatch();

  const counterIncrementHandler = () => {
    dispatch(increment());
  };

  const counterDecrementHandler = () => {
    dispatch(decrement());
  };

  const counterIncreaseByFiveHandler = () => {
    dispatch(increaseByAmount(5));
  };

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShown && <div className={classes.value}>{counter}</div>}
      <div>
        <button type="button" onClick={counterDecrementHandler}>
          Decrement
        </button>
        <button type="button" onClick={counterIncrementHandler}>
          Increment
        </button>
        <button type="button" onClick={counterIncreaseByFiveHandler}>
          Increment by 5
        </button>
      </div>
      <button onClick={toggleCounterHandler} type="button">
        Toggle Counter
      </button>
    </main>
  );
}

export default Counter;

// class Counter extends Component {
//   // this kind of modern JS syntax helps us create a class method
//   // which 'THIS' pointer is already bound to the class instance
//   // because this is the way arrow functions work in JS:
//   counterIncrementHandler = () => {
//     const { increment } = this.props;
//     increment();
//   };
//
//   counterDecrementHandler = () => {
//     const { decrement } = this.props;
//     decrement();
//   };
//
//   toggleCounterHandler = () => {
//     const { counter } = this.props;
//     console.log(counter);
//   };
//
//   render() {
//     const { counter } = this.props;
//
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{counter}</div>
//         <div>
//           <button type="button" onClick={this.counterDecrementHandler}>
//             Decrement
//           </button>
//           <button type="button" onClick={this.counterIncrementHandler}>
//             Increment
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler} type="button">
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }
//
// // if we use class-based components, and we want to use Redux store
// // then we cannot use HOOKS, unfortunately...
// // we have to use 'CONNECT' function from 'react-redux' library.
// // p.s. this is not the case for functional components:
// we can use both approaches (connect/hooks)
// // this is a higher order function which
// // 1) accepts 2 arguments both of which are functions:
// // - a function which receives STATE and maps state to components props (i.e. it returns
// an object
// // where a KEY is a name of prop that we will use inside component and the VALUE
// // is a piece of state from Redux store). The naming convention for this function
// // is 'mapStateToProps'.
// // p.s. Basically 'mapStateToProps' does the same thing as useSelector hook!
// // - a function which receives DISPATCH and maps dispatch to components props (i.e. it returns
// // an object where a KEY is a name of prop that we will use inside component and the VALUE
// // is DISPATCH function). The naming convention for this function
// // is 'mapDispatchToProps'.
// // p.s. Basically 'mapDispatchToProps' does the same thing as useDispatch hook!
// // 2) returns a function which we pass our Component as an argument into
// const mapStateToProps = (state) => ({
//   counter: state.counter,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch({ type: 'increment' }),
//   decrement: () => dispatch({ type: 'decrement' }),
// });
//
// Counter.propTypes = {
//   counter: PropTypes.number.isRequired,
//   increment: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired,
// };
//
// // and now the 'Counter' component is CONNECTED to the Redux store
// // and has access to STATE and DISPATCH
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
