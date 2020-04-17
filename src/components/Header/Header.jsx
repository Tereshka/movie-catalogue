import React from "react";

import AppContextHOC from "../HOC/AppContextHOC";
import UserMenu from './UserMenu';
import { Link } from 'react-router-dom';


function Header(props) {
  const { user, toggleLoginModal } = props;
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
      </ul>
      { user
        ? <UserMenu />
        : <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="button"
            onClick={toggleLoginModal}
          >
            Log in
          </button> }
    </nav>
  );
}

export default AppContextHOC(Header);