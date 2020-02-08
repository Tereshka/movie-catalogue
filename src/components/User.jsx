import React from 'react';
import AppContextHOC from './HOC/AppContextHOC';

function User(props) {
  const {user} = props;

  return (
    <div>
      <img
        className="rounded mr-2"
        alt="avatar"
        src={`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s=32"`}
        />
      <span className="text-light">{user.username}</span>
    </div>
  );
}

export default AppContextHOC(User);