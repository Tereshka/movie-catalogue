import React from 'react';
import { Table, Badge } from 'reactstrap';


export default function MovieDetail(props) {
  const { movie } = props;
  return (<Table>
    <tbody>
      <tr>
        <td>Tagline</td>
        <td>{movie.tagline}</td>
      </tr>
      <tr>
        <td>Rating</td>
        <td><Badge color="success">{`${movie.vote_average} (${movie.vote_count})`}</Badge></td>
      </tr>
      <tr>
        <td>Genres</td>
        <td>{
          movie.genres.map(genre => (<Badge key={genre.id} color="warning" pill>{genre.name}</Badge>))
        }</td>
      </tr>
      <tr>
        <td>Runtime</td>
        <td>{movie.runtime} min</td>
      </tr>
      <tr>
        <td>Status</td>
        <td>{movie.status}</td>
      </tr>
      <tr>
        <td>Release date</td>
        <td>{movie.release_date}</td>
      </tr>
      <tr>
        <td>Country</td>
        <td>{
          movie.production_countries.map((country, i) => (<span key={i}>{country.name} </span>))
        }</td>
      </tr>
    </tbody>
  </Table>);
}