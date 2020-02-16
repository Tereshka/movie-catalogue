import React from "react";
import { Link } from 'react-router-dom';
import ActionIcons from '../UIComponents/ActionIcons';
import {MovieContextConsumer} from './movieContext';

import noPoster from '../../img/no_poster_album.jpg';

class MovieItem extends React.Component {

  getPosterSrc(value) {
    if (value) {
      return `https://image.tmdb.org/t/p/w500${value}`;
    }
    return noPoster;
  }

  render() {
    const { movie } = this.props;
    const { title, backdrop_path, overview, vote_average, id } = movie;

    return (
      <div className="card">
        <img className="card-img-top" src={this.getPosterSrc(backdrop_path)} alt={title} />
        <div className="card-body">
          <div className="card-title">
            <Link to={`/movie/${movie.id}/detail`}>{title}</Link>
            <span className="badge badge-warning">{vote_average}</span>
          </div>
          <MovieContextConsumer>
            {
              context => <ActionIcons movie={movie} {...context} />
            }
          </MovieContextConsumer>
          <button type="button"
            className="btn btn-block btn-outline-dark mt-2"
            data-toggle="modal"
            data-target={`#itemModal-${id}`}
          >
            About
          </button>
        </div>
        <div id={`itemModal-${id}`} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby={`#modalTitle-${id}`} aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`#modalTitle-${id}`}>{title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default MovieItem;