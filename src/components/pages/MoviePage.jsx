import React, {useEffect} from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { withMovie } from '../../hoc/withMovie';

import { Nav, NavItem } from 'reactstrap';
import MovieCredit from '../Movie/MovieCredit';
import MovieDetail from '../Movie/MovieDetail';
import MovieVideo from '../Movie/MovieVideo';
import ActionIcons from '../UIComponents/ActionIcons';

import noPoster from '../../img/no_poster.jpg';

function MoviePage(props) {

  useEffect(() => {
    const movieId = props.match.params.id;
    props.movieActions.fetchMovieById(movieId);
  }, []);

  const { currentMovie } = props.movie;
  if (currentMovie === null) {
    return <div></div>;
  }
  const { title, overview, poster_path } = currentMovie;

  const getPosterSrc = value => {
    if (value) {
      return `https://image.tmdb.org/t/p/w500${value}`;
    }
    return noPoster;
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">

          <div className="card mb-3" >
            <div className="row no-gutters">
              <div className="col-md-4">
                <img className="card-img-top" src={getPosterSrc(poster_path)} alt={title} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title display-4 text-center">{title}</h5>
                  <p className="card-text">{overview}</p>
                  <ActionIcons currentMovie={currentMovie} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Nav tabs className="my-2">
              <NavItem>
                <NavLink className="nav-link" to={`/movie/${currentMovie.id}/detail`}>
                  Details
            </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to={`/movie/${currentMovie.id}/videos`}>
                  Video
            </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to={`/movie/${currentMovie.id}/credit`}>
                  Credits
            </NavLink>
              </NavItem>
            </Nav>
            <Switch>
              <Route path="/movie/:id/detail"><MovieDetail /></Route>
              <Route path="/movie/:id/videos"><MovieVideo /></Route>
              <Route path="/movie/:id/credit"><MovieCredit /></Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withMovie(MoviePage);