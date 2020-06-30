import React from "react";
import { withMovie } from "../../hoc/withMovie";

function GenreSelector(props) {
  const { genres, genresSelected } = props.movie;
  const { setSelectedGenres, fetchMovies } = props.movieActions;

  const onChangeCheckbox = event => {
    const {checked, value} = event.target;
    setSelectedGenres({checked, value});
    fetchMovies();
  };
  
  return (
    <div>
      <h4>Select genres</h4>
      {
        genres.map(genre => (
          <div className="form-group" key={genre.id}>
            <div className="form-check">
              <input className="form-check-input"
                type="checkbox"
                name="genres"
                value={genre.id}
                id={genre.id}
                onChange={onChangeCheckbox}
                checked={genresSelected.includes(genre.id)}
              />
                <label className="form-check-label" htmlFor={genre.id}>
                  {genre.name}
                </label>
              </div>
          </div>
        ))
      }
    </div>
  );
};

export default withMovie(GenreSelector);