import React from "react";

import Header from './Header/Header';
import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';

import { BrowserRouter, Route } from 'react-router-dom';

import CallApi from '../api/api.js';
import Cookie from 'universal-cookie';

const cookies = new Cookie();

export const AppContext = React.createContext();

class App extends React.Component {

  state = {
    user: null,
    sessionId: null,
  }

  componentDidMount() {
    const sessionId = cookies.get('session_id');
    if (sessionId) {
      CallApi.get('/account', {params: {session_id: sessionId}})
        .then(user => {
          this.updateSessionId(sessionId);
          this.updateUser(user);
        });
    }
  }

  updateSessionId = sessionId => {
    this.setState({sessionId});
    cookies.set('session_id', sessionId, {
      path: '/',
      maxAge: 2592000, // 30 days
    })
  }

  updateUser = user => {
    this.setState({user});
  }

  onLogOut = () => {
    cookies.remove('session_id');
    this.setState({
      session_id: null,
      user: null,
    });
  }

  render() {
    const { user, sessionId } = this.state;
    return (
      <BrowserRouter>
        <AppContext.Provider value={{
          user: user,
          sessionId: sessionId,
          updateUser: this.updateUser,
          updateSessionId: this.updateSessionId,
          onLogOut: this.onLogOut,
          }}
        >
          <div>
            <Header user={user} sessionId={sessionId}/>
            <Route exact path="/" render={(props) => <MoviesPage {...props} user={user} sessionId={sessionId}/>} />
            <Route path="/movie" component={MoviePage} />
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
