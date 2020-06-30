import React from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from '../../hoc/withAuth';
import UserMenu from './UserMenu';

function Header(props) {
  const { auth, authActions } = props;
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
      </ul>
      { auth.user
        ? <UserMenu />
        : <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="button"
            onClick={authActions.toggleLoginModal}
          >
            Log in
          </button> }
    </nav>
  );
}

export default withAuth(Header);