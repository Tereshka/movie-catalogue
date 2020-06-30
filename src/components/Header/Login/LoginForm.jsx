import React from 'react';
import { withAuth } from '../../../hoc/withAuth';

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
    const {name} = event.target;
    const errors = this.validateFields();
    const error = errors[name];

    if (error) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          [name]: error,
        }
      }));
    }
    this.props.authActions.clearLoginErrors();
  }
  
  validateFields = () => {
    const errors = {};

    if (this.state.username === '') {
      errors.username = 'Username is required';
    }
    if (this.state.password === '') {
      errors.password = 'Password is required';
    }

    if (this.state.password.length < 5) {
      errors.password = 'Your password it too small';
    }
    // Unnecessary field
    // if (this.state.repeatPassword !== this.state.password) {
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
  sendPromisesAsync = () => {
    const { username, password } = this.state;
    this.setState({submitting: true});
    
    this.props.authActions.login({username, password})
      .then(() => {
        if (this.props.auth.errors) {
          this.setState({
            submitting: false,
            errors: {
              base: this.props.auth.errors.base
            }
          });
        } else {
          this.setState({submitting: false});
          this.props.authActions.toggleLoginModal();
        }
    });
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

export default withAuth(LoginForm);