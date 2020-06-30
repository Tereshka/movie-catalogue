import React from 'react';
import { withMovie } from '../../hoc/withMovie';

function MovieTabs(props) {
  const sortList = [
    {
      title: 'Popularity desc',
      sortBy: 'popularity.desc',
    },
    {
      title: 'Revenue desc',
      sortBy: 'revenue.desc',
    },
    {
      title: 'Release date desc',
      sortBy: 'release_date.desc',
    }
  ];
  const { sortBy } = props.movie;
  const { setSortBy, fetchMovies } = props.movieActions;

  const onChangeSortBy = value => {
    setSortBy(value);
    fetchMovies();
  }

  const getClassName = value => {
    return `nav-link ${sortBy === value ? 'active' : ''}`;
  }

  return (
    <ul className="nav nav-tabs nav-pills">
      {
        sortList.map(list => {
          return (
            <li key={list.sortBy} className="nav-item">
              <div
                className={getClassName(list.sortBy)}
                onClick={() => onChangeSortBy(list.sortBy)}
              >
                {list.title}
              </div>
            </li>
          )
        })
      }
    </ul>
  );
};

export default withMovie(MovieTabs);