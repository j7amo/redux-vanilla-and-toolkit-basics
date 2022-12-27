import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';

import classes from './Header.module.css';

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button type="button" onClick={logoutHandler}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
