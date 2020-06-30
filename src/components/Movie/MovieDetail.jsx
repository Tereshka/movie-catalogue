import React from 'react';
import { withMovie } from '../../hoc/withMovie';

import { Table, Badge } from 'reactstrap';

function MovieDetail(props) {
  const { currentMovie } = props.movie;

  return (<Table>
    <tbody>
      <tr>
        <td>Tagline</td>
        <td>{currentMovie.tagline}</td>
      </tr>
      <tr>
        <td>Rating</td>
        <td><Badge color="success">{`${currentMovie.vote_average} (${currentMovie.vote_count})`}</Badge></td>
      </tr>
      <tr>
        <td>Genres</td>
        <td>{
          currentMovie.genres.map(genre => (<Badge key={genre.id} color="warning" pill>{genre.name}</Badge>))
        }</td>
      </tr>
      <tr>
        <td>Runtime</td>
        <td>{currentMovie.runtime} min</td>
      </tr>
      <tr>
        <td>Status</td>
        <td>{currentMovie.status}</td>
      </tr>
      <tr>
        <td>Release date</td>
        <td>{currentMovie.release_date}</td>
      </tr>
      <tr>
        <td>Country</td>
        <td>{
          currentMovie.production_countries.map((country, i) => (<span key={i}>{country.name} </span>))
        }</td>
      </tr>
    </tbody>
  </Table>);
};

export default withMovie(MovieDetail);