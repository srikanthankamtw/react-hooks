import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context ';
import classes from './Navigation.module.css';

const Navigation = (props) => {

  const user = useContext(AuthContext);

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
  );
};

export default Navigation;
