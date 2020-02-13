import React from 'react';

import { Modal, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';

export default class Login extends React.Component {

  state = {
    showLoginModal: false,
  }

  toggleShowLoginModal = () => {
    this.setState({showLoginModal: !this.state.showLoginModal});
  }

  componentDidMount() {
    if (!this.props.sessionId) {
      this.setState({showLoginModal: true});
    }
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-outline-primary my-2 my-sm-0"
          type="button"
          onClick={this.toggleShowLoginModal}
        >
          Log in
        </button>
        <Modal isOpen={this.state.showLoginModal} toggle={this.toggleShowLoginModal}>
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </Modal>
      </div>
    );
  }

}