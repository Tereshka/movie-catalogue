import React from "react";

export default class MovieItem extends React.Component {

    state = {
        isInWatchList: false,
    }

    render() {
        const { movie: { title, poster_path, overview, vote_average, toggleWatchList } } = this.props;
        const {isInWatchList} = this.state;
        return (
            <div className="card">
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{vote_average}</p>
                    <p className="card-text">{overview}</p>
                    <button type="button" className="btn btn-primary" onClick={() => toggleWatchList(this.props)}>{
                        isInWatchList ? "Remove" : "Going to watch"
                    }</button>
                </div>
            </div>
        );
    }
    
}

