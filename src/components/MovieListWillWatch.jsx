import React from "react";

export default function MovieListWillWatch(props) {
    const { movies } = props;
    return (
        <div className="row">
            <h4>Will watch {movies.length} movies</h4>
            <ul className="list-group">
                {
                    movies.map(movie => {
                        return (
                            <li className="list-group-item">{movie}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}