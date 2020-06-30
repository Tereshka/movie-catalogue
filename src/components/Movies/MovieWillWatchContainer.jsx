import React from 'react';
import { Link } from 'react-router-dom';
import { withMovie } from '../../hoc/withMovie';

function MovieWillWatchContainer(props) {
  const { moviesWillWatch } = props.movie;
  return (
    <div>
      <h4>Will watch {moviesWillWatch.length} movies</h4>
      <ul className="list-group">
        { moviesWillWatch.map((movie, index) => {
            return (
              <li key={index} className="list-group-item">
                <Link to={`/movie/${movie.id}/detail`}>{movie.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default withMovie(MovieWillWatchContainer);