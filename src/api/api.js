import queryString from 'query-string';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchApi = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
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
      .catch(res => {
        // reject(response);
        res.json().then(error => {
          reject(error);
        });
      });
  });
};

export default class CallApi {
  static get(url, options = {}) {
    const {params = {}} = options;

    const queryStringParams = {
      api_key: API_KEY,
      ...params,
    };

    return fetchApi(`${API_URL}${url}?${queryString.stringify(queryStringParams)}`, {
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  static post(url, options = {}) {
    const {params = {}, body = {}} = options;

    const queryStringParams = {
      api_key: API_KEY,
      ...params,
    };

    return fetchApi(`${API_URL}${url}?${queryString.stringify(queryStringParams)}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body)
    });
  }

  static delete(url, options = {}) {
    const {params = {}, body = {}} = options;

    const queryStringParams = {
      api_key: API_KEY,
      ...params,
    };

    return fetchApi(`${API_URL}${url}?${queryString.stringify(queryStringParams)}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body)
    });
  }
}