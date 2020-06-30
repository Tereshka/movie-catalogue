import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './Header/Header';
import Login from './Header/Login/Login'
import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';
import FavoritePage from './pages/FavoritePage';
import WillWatchPage from './pages/WillWatchPage';

import { withAuth } from '../hoc/withAuth';

class App extends React.Component {

  componentDidMount() {
    const { auth, authActions } = this.props;

    if (auth.sessionId) {
      authActions.fetchAuth(auth.sessionId);
    } else {
      authActions.toggleLoginModal();
    }
  }

  render() {
    const { auth } = this.props;
    const { sessionId, isAuth, showLoginModal} = auth;

    return isAuth || !sessionId ? (
      <HashRouter basename='/'>
        <Header />
        { showLoginModal && <Login /> }
        <Route exact path="/"> <MoviesPage /></Route>
        <Route path="/favorite"> <FavoritePage /></Route>
        <Route path="/willwatch"> <WillWatchPage /></Route>
        <Route path="/movie/:id" render={(props) => <MoviePage {...props} />}
        />
      </HashRouter>
    ) : (
      <p>...Loading</p>
    );
  }
}

export default withAuth(App);
