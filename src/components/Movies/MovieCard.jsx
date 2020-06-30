import React from "react";
import { Link } from 'react-router-dom';
import ActionIcons from '../UIComponents/ActionIcons';

import noPoster from '../../img/no_poster_album.jpg';

function MovieCard(props) {
  const { movie } = props;
  const { title, backdrop_path, overview, vote_average, id } = movie;

  const getPosterSrc = value => {
    if (value) {
      return `https://image.tmdb.org/t/p/w500${value}`;
    }
    return noPoster;
  }

  return (
    <div className="card">
      <img className="card-img-top" src={getPosterSrc(backdrop_path)} alt={title} />
      <div className="card-body">
        <div className="card-title">
          <Link to={`/movie/${id}/detail`}>{title}</Link>
          <span className="badge badge-warning">{vote_average}</span>
        </div>
        <ActionIcons currentMovie={movie} />
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
};

export default MovieCard;