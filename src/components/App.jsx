import React from "react";

import Header from './Header/Header';
import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';
import {MovieContextConsumer} from './Movies/movieContext';

import { HashRouter, Route } from 'react-router-dom';

import CallApi from '../api/api.js';
import { actionUpdateAuth, actionLogout } from '../actions/auth';
import { connect } from 'react-redux';


export const AppContext = React.createContext();

class App extends React.Component {

  componentDidMount() {
    const { sessionId, updateAuth } = this.props;

    if (sessionId) {
      CallApi.get('/account', {params: {session_id: sessionId}})
        .then(user => {
          updateAuth(user, sessionId);
        });
    }
  }

  render() {
    const { user, sessionId, isAuth, updateAuth, onLogOut } = this.props;
    return isAuth || !sessionId ? (
      <HashRouter basename='/'>
        <AppContext.Provider value={{
          user,
          sessionId,
          isAuth,
          updateAuth,
          onLogOut,
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

const mapStateToProps = (state) => {
  const { user, sessionId, isAuth } = state;
  return {
    user,
    sessionId,
    isAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateAuth: (user, sessionId) => dispatch(actionUpdateAuth({user, sessionId})),
    onLogOut: () => dispatch(actionLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
