import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../hoc/withAuth';
import { withMovie } from '../../hoc/withMovie';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
    this.props.authActions.userLogout(this.props.auth.sessionId);
    this.props.movieActions.clearAllUserData();
  }

  render() {
    const {dropdownOpen} = this.state;
    const {auth: { user }} = this.props;
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
          <DropdownItem onClick={this.toggle}>
            <Link to={'/favorite'}>My favorite movies</Link>
          </DropdownItem>
          <DropdownItem onClick={this.toggle}>
            <Link to={'/willwatch'}>My will watch list</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default withAuth(withMovie(UserMenu));