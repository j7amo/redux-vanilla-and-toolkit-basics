import React from 'react';
import ReactDOM from 'react-dom/client';
// 'react-redux' library has a Provider component which we can use to:
// 1) wrap the whole App.
// 2) pass our created 'store' object via 'store' prop to the whole App.
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
