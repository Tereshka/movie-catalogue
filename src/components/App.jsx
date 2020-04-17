import React from "react";

import Header from './Header/Header';
import Login from './Header/Login/Login'
import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';
import {MovieContextConsumer} from './Movies/movieContext';

import { HashRouter, Route } from 'react-router-dom';

import CallApi from '../api/api.js';
import { updateAuth, logout, toggleLoginModal } from '../redux/auth/authActions';
import { connect } from 'react-redux';


export const AppContext = React.createContext();

class App extends React.Component {

  componentDidMount() {
    const { sessionId, updateAuth, toggleLoginModal } = this.props;

    if (sessionId) {
      CallApi.get('/account', {params: {session_id: sessionId}})
        .then(user => {
          updateAuth({user, sessionId});
        });
    } else {
      toggleLoginModal();
    }
  }

  render() {
    const { user, sessionId, isAuth, showLoginModal, updateAuth, logout, toggleLoginModal } = this.props;
    return isAuth || !sessionId ? (
      <HashRouter basename='/'>
        <AppContext.Provider value={{
          user,
          sessionId,
          isAuth,
          showLoginModal,
          updateAuth,
          logout,
          toggleLoginModal,
          }}
        >
          <div>
            <Header user={user} sessionId={sessionId}/>
            {showLoginModal && <Login />}
            <Route exact path="/"> <MoviesPage user={user} sessionId={sessionId}/></Route>
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
  const { user, sessionId, isAuth, showLoginModal } = state.auth;
  return {
    user,
    sessionId,
    isAuth,
    showLoginModal,
  };
};
const mapDispatchToProps =  {
  logout,
  updateAuth,
  toggleLoginModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
