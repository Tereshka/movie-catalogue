import React from 'react';
import {AppContext} from './App';

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

const UserContainer = (props) => {
  return (
    <AppContext.Consumer>
      {
        (context) => {
          return <User user={context.user} {...props} />
        }
      }
    </AppContext.Consumer>
  );
}
UserContainer.displayName = 'UserContainer';

export default UserContainer;