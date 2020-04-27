import React from 'react';
import AppContextHOC from '../../HOC/AppContextHOC';
import CallApi from '../../../api/api';

class LoginForm extends React.Component {

  state = {
    username: '',
    password: '',
    repeatPassword: '',
    errors: {},
    submitting: false,
  }

  onChangeInput = event => {
    const name = event.target.name;
    const value = event.target.value;
		this.setState(prevState => ({ 
      [name]: value,
      errors: {
        ...prevState.errors,
        base: null,
        [name]: null,
      }
    }));
  }

  handleBlur = (event) => {
    const errors = this.validateFields(event.target.name);
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    }
  }
  
  validateFields = (field) => {
    const errors = {};

    if ((field === 'username' || field === undefined) && this.state.username === '') {
      errors.username = 'Username is required';
    }
    if ((field === 'password' || field === undefined) && this.state.password === '') {
      errors.password = 'Password is required';
    }
    // Unnecessary field
    // if ((field === 'repeatPassword' || field === undefined)
    //   && (this.state.repeatPassword === '' || this.state.repeatPassword !== this.state.password)) {
    //   errors.repeatPassword = 'Passwords should be equal';
    // }

    return errors;
  }

  onLogin = event => {
    event.preventDefault();
    let errors = this.validateFields();
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    } else {
      this.sendPromisesAsync();
    }
  }

  // Send requests in async style
  sendPromisesAsync = async () => {
    this.setState({submitting: true});
    try {
      const token = await CallApi.get('/authentication/token/new');
      const tokenWithLogin = await CallApi.post('/authentication/token/validate_with_login', {
        body: {
          username: this.state.username,
          password: this.state.password,
          request_token: token.request_token,
        }
      });

      const session = await CallApi.post('/authentication/session/new', {
        body: {
          request_token: tokenWithLogin.request_token,
        }
      });

      const user = await CallApi.get('/account', { params: {session_id: session.session_id}});

      this.props.updateAuth({user, session_id: session.session_id});
      this.setState({submitting: false});
      this.props.toggleLoginModal();
    } catch (error) {
      // error.json().then(error => console.log(error));

      this.setState({
        submitting: false,
        errors: {
          base: error.status_message
        }
      })
    }
  }

  render() {
    const {username, password, repeatPassword, errors, submitting} = this.state;
    return (
      <div>
        <h1>Log into your account</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className={errors.username ? "form-control invalid" : "form-control"}
            placeholder="username"
            name="username"
            value={username}
            onChange={this.onChangeInput}
            onBlur={this.handleBlur}
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className={errors.password ? "form-control invalid" : "form-control"}
            placeholder="password"
            name="password"
            value={password}
            onChange={this.onChangeInput}
            onBlur={this.handleBlur}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div> }
        </div>
        {/* <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            id="repeatPassword"
            type="password"
            className={errors.repeatPassword ? "form-control invalid" : "form-control"}
            placeholder="repeatPassword"
            name="repeatPassword"
            value={repeatPassword}
            onChange={this.onChangeInput}
            onBlur={this.handleBlur}
          />
          {errors.repeatPassword && <div className="invalid-feedback">{errors.repeatPassword}</div> }
    </div> */}
        <button
          className="btn btn-block btn-primary my-2 my-sm-0"
          type="submit"
          disabled={submitting}
          onClick={this.onLogin}
        >
          Log in
        </button>
        {errors.base && <div className="invalid-feedback text-center">{errors.base}</div> }
      </div>
    );
  }
}

export default AppContextHOC(LoginForm);