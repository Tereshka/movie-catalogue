import React from 'react';

import {fetchApi} from '../api/api.js';

export default class LoginForm extends React.Component {

  state = {
    apiURL: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
    username: '',
    password: '',
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

  handleBlur = () => {
    const errors = this.validateFields();
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    }
  }
  
  validateFields = () => {
    const errors = {};

    if (this.state.username === '') {
      errors.username = 'Enter your username';
    }
    if (this.state.password === '') {
      errors.password = 'Enter your password';
    }

    return errors;
  }

  onLogin = event => {
    event.preventDefault();
    const errors = this.validateFields();
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



  // Send requests in chain
  sendPromises = () => {
    const {apiURL, apiKey} = this.state;
    fetchApi(`${apiURL}/authentication/token/new?api_key=${apiKey}`)
      .then(data => 
        fetchApi(`${apiURL}/authentication/token/validate_with_login?api_key=${apiKey}`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            request_token: data.request_token,
          })
        })
      )
      .then(data => 
        fetchApi(`${apiURL}/authentication/session/new?api_key=${apiKey}`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            request_token: data.request_token,
          })
        })
      )
      .then(data => console.log(data))
      .catch(error => console.log('error', error));
  }

  // Send requests in async style
  sendPromisesAsync = async () => {
    const {apiURL, apiKey} = this.state;
    this.setState({submitting: true});
    try {
      const token = await fetchApi(`${apiURL}/authentication/token/new?api_key=${apiKey}`);
      const tokenWithLogin = await fetchApi(`${apiURL}/authentication/token/validate_with_login?api_key=${apiKey}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          request_token: token.request_token,
        })
      });
      const session = await fetchApi(`${apiURL}/authentication/session/new?api_key=${apiKey}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          request_token: tokenWithLogin.request_token,
        })
      });

      const user = await fetchApi(`${apiURL}/account?api_key=${apiKey}&session_id=${session.session_id}`);
      this.props.updateUser(user);
      this.props.updateSessionId(session.session_id);

      this.setState({submitting: false});
    } catch (error) {
      console.log('error', error);
      this.setState({
        submitting: false,
        errors: {
          base: error.status_message
        }
      })
    }
  }


  render() {
    const {username, password, errors, submitting} = this.state;
    return (
      <div>
        <h1>Log into your account</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className="form-control"
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
            className="form-control"
            placeholder="password"
            name="password"
            value={password}
            onChange={this.onChangeInput}
            onBlur={this.handleBlur}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div> }
        </div>
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