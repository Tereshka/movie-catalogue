import React from "react";

import { Star, StarBorder, Bookmark, BookmarkBorder } from '@material-ui/icons';
import noPoster from '../../img/no_poster.jpg';

class MovieItem extends React.Component {

  state = {

  }

  getPosterSrc(value) {
    if (value) {
      return `https://image.tmdb.org/t/p/w500${value}`;
    }
    return noPoster;
  }

  isInArray(movie, array) {
    if (array.map(m => m.id).find(el => el === movie.id)) {
      return true;
    }
    return false;
  }

  render() {
    const { movie, user, moviesFavourite, moviesWillWatch, setWatchList, setFavouriteMovie } = this.props;
    const { title, poster_path, overview, vote_average, id } = movie;

    let isFavourite = this.isInArray(movie, moviesFavourite);
    let inWatchList = this.isInArray(movie, moviesWillWatch);

    return (
      <div className="card">
        <img className="card-img-top" src={this.getPosterSrc(poster_path)} alt={title} />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span className="badge badge-warning">{vote_average}</span>
          </h5>
          { user &&
            <div>
              { isFavourite &&
                <Star color="secondary" className="icon" onClick={() => setFavouriteMovie(movie, false)}/>
              }
              { !isFavourite &&
                <StarBorder color="secondary" className="icon" onClick={() => setFavouriteMovie(movie, true)}/>
              }
              { inWatchList &&
                <Bookmark className="icon" onClick={() => setWatchList(movie, false)}/>
              }
              { !inWatchList &&
                <BookmarkBorder className="icon" onClick={() => setWatchList(movie, true)} />
              }
            </div>
          }
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