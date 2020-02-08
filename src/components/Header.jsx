import React from "react";

import Login from './Login/Login';
import User from './User';

export default function Header(props) {
  const { user } = props;
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="">Home</a>
        </li>
      </ul>
      { user ? <User /> : <Login /> }
    </nav>
  );
}