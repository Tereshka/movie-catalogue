import React from 'react';

import { Modal, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';
import { withAuth } from '../../../hoc/withAuth';

function Login(props) {
  const { auth, authActions } = props;
  
  return (
    <Modal isOpen={auth.showLoginModal} toggle={authActions.toggleLoginModal}>
      <ModalBody>
        <LoginForm />
      </ModalBody>
    </Modal>
  );
}

export default withAuth(Login);