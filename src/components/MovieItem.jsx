import React from "react";
import noPoster from '../img/no_poster.jpg';

export default class MovieItem extends React.Component {

  state = {
    isInWatchList: false,
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

  render() {
    const { movie } = this.props;
    const { title, poster_path, overview, vote_average, id } = movie;
    const { isInWatchList } = this.state;
    const buttonClass = `btn ${isInWatchList ? "btn-primary" : "btn-secondary"}`;
    return (
      <div className="card">
        <img className="card-img-top" src={this.getPosterSrc(poster_path)} alt={title} />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span className="badge badge-warning">{vote_average}</span>
          </h5>
          <button type="button mr-2 mb-2" className="btn btn-outline-dark" data-toggle="modal" data-target={`#exampleModal-${id}`}>About</button>
          <button type="button"
            className={buttonClass}
            onClick={this.onClickHandle}
          >{
              isInWatchList ? "Remove" : "Going to watch"
            }</button>
        </div>
        <div id={`exampleModal-${id}`} className="modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
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

