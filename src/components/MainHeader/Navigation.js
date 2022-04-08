import React from 'react';
import AuthContext from '../../store/auth-context ';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(user) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {user.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {user.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {user.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        )
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
