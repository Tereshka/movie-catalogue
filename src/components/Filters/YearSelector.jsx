import React from 'react';
import { withMovie } from '../../hoc/withMovie';

function YearSelector(props) {
  const { currentYear } = props.movie;
  const { setCurrentYear, fetchMovies } = props.movieActions;
  const yearList = [
    2025,
    2024,
    2023,
    2022,
    2021,
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
  ];

  const onChangeYear = event => {
    setCurrentYear(parseInt(event.target.value));
    fetchMovies();
  }

  return (
    <select className="custom-select custom-select mb-3 mt-3" onChange={onChangeYear} value={currentYear}>
      {
        yearList.map(year => (
          <option key={year} value={year}>{ year }</option>
        ))
      }
    </select>
  );
}

export default withMovie(YearSelector);