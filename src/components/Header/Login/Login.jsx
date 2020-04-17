import React from 'react';

import { Modal, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';
import AppContextHOC from '../../HOC/AppContextHOC';

function Login(props) {
  const { showLoginModal, toggleLoginModal } = props;
  
  return (
    <Modal isOpen={showLoginModal} toggle={toggleLoginModal}>
      <ModalBody>
        <LoginForm />
      </ModalBody>
    </Modal>
  );
}

export default AppContextHOC(Login);