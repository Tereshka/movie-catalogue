import React from "react";

import Header from './Header/Header';
import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';
import {MovieContextConsumer} from './Movies/movieContext';

import { HashRouter, Route } from 'react-router-dom';

import CallApi from '../api/api.js';
import { actionUpdateAuth, actionLogout } from '../actions/auth';


export const AppContext = React.createContext();

class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;
    const { sessionId } = store.getState();

    store.subscribe(() => {
      console.log("change", store.getState());
      this.forceUpdate();
    });

    if (sessionId) {
      CallApi.get('/account', {params: {session_id: sessionId}})
        .then(user => {
          this.updateAuth(user, sessionId);
        });
    }
  }

  updateAuth = (user, sessionId) => {
    this.props.store.dispatch(actionUpdateAuth({
      user,
      sessionId,
    }));
  }

  onLogOut = () => {
    this.props.store.dispatch(actionLogout());
  }

  render() {
    const { user, sessionId, isAuth } = this.props.store.getState();
    return isAuth || !sessionId ? (
      <HashRouter basename='/'>
        <AppContext.Provider value={{
          user: user,
          sessionId: sessionId,
          updateAuth: this.updateAuth,
          onLogOut: this.onLogOut,
          }}
        >
          <div>
            <Header user={user} sessionId={sessionId}/>
            <Route exact path="/" render={(props) => <MoviesPage {...props} user={user} sessionId={sessionId}/>} />
            <Route path="/movie/:id" render={(props) =>
              <MovieContextConsumer>
                {
                  context => <MoviePage {...props} {...context}/>
                }
              </MovieContextConsumer>}
            />
          </div>
        </AppContext.Provider>
      </HashRouter>
    ) : (
      <p>...Loading</p>
    );
  }
}

export default App;
