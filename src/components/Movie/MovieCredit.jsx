import React, { useEffect } from 'react';
import { withMovie } from '../../hoc/withMovie';

import { Card, CardText, CardGroup, CardImg, CardImgOverlay, Badge, Spinner } from 'reactstrap';

import noPoster from '../../img/no_poster.jpg';

function MovieCredit(props) {
  const { currentMovie, currentMovieActors, isLoading } = props.movie;

  useEffect(() => {
    if (currentMovieActors.length === 0) {
      props.movieActions.fetchMovieActorsById(currentMovie.id);
    }
  }, []);

  const getPosterSrc = value => {
    if (value) {
      return `https://image.tmdb.org/t/p/w500${value}`;
    }
    return noPoster;
  }

  if (isLoading) {
    return <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />;
  }

  if (currentMovieActors.length === 0) {
    return <div></div>;
  }

  return (
    <CardGroup className="mx-3">
      {currentMovieActors.map((actor, i) => (
        <div key={i}>
          <Card inverse style={{ maxWidth: '300px' }} >
            <CardImg src={getPosterSrc(actor.profile_path)} alt={actor.name} />
            <CardImgOverlay>
              <CardText>
                <Badge color="dark" className="text-wrap">{`${actor.character} / ${actor.name}`}</Badge>
              </CardText>
            </CardImgOverlay>
          </Card>
        </div>
      ))}
    </CardGroup>
  );
};

export default withMovie(MovieCredit);