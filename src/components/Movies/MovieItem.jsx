import React from "react";

import { Star, StarBorder, Bookmark, BookmarkBorder } from '@material-ui/icons';
import noPoster from '../../img/no_poster.jpg';

export default class MovieItem extends React.Component {

  state = {
    isInWatchList: false,

    isFavourite: false,
    inWatchList: false,
  }

  onClickHandle = () => {
    this.setState({ isInWatchList: !this.state.isInWatchList })
    this.props.toggleWatchList(this.props.movie);
  }

  getPosterSrc(value) {
    if (value) {
      return `https://image.tmdb.org/t/p/w500${value}`;
    }
    return noPoster;
  }

  getFavourite = () => {
    const { movie, moviesFavourite } = this.props;
    if (moviesFavourite.map(m => m.id).find(el => el === movie.id)) {
      this.setState({ isFavourite: true });
    } else {
      this.setState({ isFavourite: false });
    }
  }

  getInWatchList = () => {
    const { movie, moviesWillWatch } = this.props;
    if (moviesWillWatch.map(m => m.id).find(el => el === movie.id)) {
      this.setState({ inWatchList: true });
    } else {
      this.setState({ inWatchList: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.moviesFavourite !== this.props.moviesFavourite) {
      this.getFavourite();
    }
    if (prevProps.moviesWillWatch !== this.props.moviesWillWatch) {
      this.getFavourite();
    }
  }

  render() {
    const { movie, user } = this.props;
    const { title, poster_path, overview, vote_average, id } = movie;
    const { isInWatchList, isFavourite, inWatchList } = this.state;
    const buttonClass = `btn btn-block ${isInWatchList ? "btn-primary" : "btn-secondary"}`;

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
              {isFavourite && <Star color="secondary" />}
              {!isFavourite &&<StarBorder color="secondary" />}
              {inWatchList &&<Bookmark onClick={() => this.props.setWatchList(movie, false)}/>}
              {!inWatchList && <BookmarkBorder onClick={() => this.props.setWatchList(movie, true)} />}
            </div>
          }
          <button type="button" 
            className="btn btn-block btn-outline-dark"
            data-toggle="modal"
            data-target={`#itemModal-${id}`}
          >
            About
          </button>
          <button type="button"
            className={buttonClass}
            onClick={this.onClickHandle}
          >
            { isInWatchList ? "Remove" : "Going to watch" }
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

