import React from 'react';
import MovieCredit from '../Movies/MovieCredit';
import MovieDetail from '../Movies/MovieDetail';
import MovieVideo from '../Movies/MovieVideo';
import { Nav, NavItem } from 'reactstrap';
import ActionIcons from '../UIComponents/ActionIcons';
import { MovieContextConsumer } from '../Movies/movieContext';

import { Route, Switch, NavLink } from 'react-router-dom';

import noPoster from '../../img/no_poster.jpg';

import CallApi from '../../api/api';

export default class MoviePage extends React.Component {

  state = {
    movie: null,
  }

  componentDidMount() {
    const movieId = this.props.match.params.id;
    CallApi.get(`/movie/${movieId}`).then(data => this.setState({ movie: data }));
  }

  getPosterSrc(value) {
    if (value) {
      return `https://image.tmdb.org/t/p/w500${value}`;
    }
    return noPoster;
  }

  render() {
    const { movie } = this.state;

    if (movie === null) {
      return <div></div>;
    }

    const { title, overview, poster_path } = this.state.movie;

    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">

            <div className="card mb-3" >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img className="card-img-top" src={this.getPosterSrc(poster_path)} alt={title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title display-4 text-center">{title}</h5>
                    <p className="card-text">{overview}</p>
                    {/* <MovieContextConsumer>
                      {
                        context => <ActionIcons movie={movie} {...context} />
                      }
                    </MovieContextConsumer> */}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Nav tabs className="my-2">
                <NavItem>
                  <NavLink className="nav-link" to={`/movie/${movie.id}/detail`}>
                    Details
              </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to={`/movie/${movie.id}/videos`}>
                    Video
              </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to={`/movie/${movie.id}/credit`}>
                    Credits
              </NavLink>
                </NavItem>
              </Nav>
              <Switch>
                <Route path="/movie/:id/detail" render={(props) => <MovieDetail {...props} movie={movie} />} />
                <Route path="/movie/:id/videos" render={(props) => <MovieVideo {...props} movie={movie} />} />
                <Route path="/movie/:id/credit" render={(props) => <MovieCredit {...props} movie={movie} />} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}