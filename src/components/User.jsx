import React from 'react';

export default function Header(props) {
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