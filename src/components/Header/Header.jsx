import React from "react";

import Login from './Login/Login';
import UserMenu from './UserMenu';
import { Link } from 'react-router-dom';


export default function Header(props) {
  const { user, sessionId } = props;
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
      </ul>
      { user ? <UserMenu /> : <Login sessionId={sessionId} /> }
    </nav>
  );
}