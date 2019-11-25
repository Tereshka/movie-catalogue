import React from "react";

export default class Login extends React.Component {

  state = {
    apiURL: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
  }

  fetchApi = (url, options = {}) => {
    const {apiURL, apiKey} = this.state;
    return new Promise((resolve, reject) => {
      fetch(`${apiURL}${url}?api_key=${apiKey}`, options)
      .then(response => {
        if (response.status < 400) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(response => {
        response.json().then(error => {
          reject(error);
        })
      });
    });
  }

  // Send requests in chain
  sendPromises = () => {
    this.fetchApi('/authentication/token/new')
      .then(data => 
        this.fetchApi('/authentication/token/validate_with_login', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            username: 'tereshka',
            password: 'len4ik66291226La1',
            request_token: data.request_token,
          })
        })
      )
      .then(data => 
        this.fetchApi('/authentication/session/new', {
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
    try {
      const token = await this.fetchApi('/authentication/token/new');
      const tokenWithLogin = await this.fetchApi('/authentication/token/validate_with_login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: 'tereshka',
          password: 'len4ik66291226La1',
          request_token: token.request_token,
        })
      });
      const session = await this.fetchApi('/authentication/session/new', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          request_token: tokenWithLogin.request_token,
        })
      });
    } catch (error) {
      console.log('error', error)
    }
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-outline-primary my-2 my-sm-0"
          type="button"
          onClick={this.sendPromisesAsync}
        >
          Login
        </button>
      </div>
    );
  }

}