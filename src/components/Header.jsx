import React from "react";

import Login from './Login';

export default function Header(props) {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Home</a>
      <Login />
    </nav>
  );
}