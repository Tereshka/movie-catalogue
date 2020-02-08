import React from "react";

import Login from './Login/Login';
import UserMenu from './UserMenu';

export default function Header(props) {
  const { user } = props;
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="">Home</a>
        </li>
      </ul>
      { user ? <UserMenu /> : <Login /> }
    </nav>
  );
}