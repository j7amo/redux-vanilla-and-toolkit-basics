import React from 'react';
import classes from './Counter.module.css';

function Counter() {
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      <button onClick={toggleCounterHandler} type="button">
        Toggle Counter
      </button>
    </main>
  );
}

export default Counter;
