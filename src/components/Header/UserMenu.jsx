import React from 'react';
import AppContextHOC from '../HOC/AppContextHOC';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CallApi from '../../api/api';


class UserMenu extends React.Component {
  state = {
    dropdownOpen: false,
  }

  toggle = () => {
    this.setState(
      prevState => ({
        dropdownOpen: !prevState.dropdownOpen,
      })
    );
  }

  handleLogOut = () => {
    CallApi.delete('/authentication/session', {body: {session_id: this.props.sessionId}})
      .then( () => this.props.onLogOut());
  }

  render() {
    const {dropdownOpen} = this.state;
    const {user} = this.props;
    return (
      <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
        <DropdownToggle
          tag="div"
          data-toggle="dropdown"
          aria-expanded={dropdownOpen}
        >
          <div onClick={this.toggle}>
            <img
              className="rounded mr-2"
              alt="avatar"
              src={`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s=32"`}
              />
            <span className="text-light">{user.username}</span>
          </div>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={this.handleLogOut}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default AppContextHOC(UserMenu);