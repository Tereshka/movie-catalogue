import React, {useEffect} from 'react';
import { withMovie } from '../../hoc/withMovie';

import { Spinner } from 'reactstrap';

function MovieVideo(props) {
  const { currentMovie, currentMovieVideos, isLoading } = props.movie;

  useEffect(() => {
    if (currentMovieVideos.length === 0) {
      props.movieActions.fetchMovieVideosById(currentMovie.id);
    }
  }, []);

  if (isLoading) {
    return <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />;
  }

  if (currentMovieVideos.length === 0) {
    return <div></div>;
  }

  return (
    <div className="row">
      { currentMovieVideos.map(video => (
        <div key={video.id} className="col-3 mb-2">
          <a target="_blank" href={`http://www.youtube.com/watch?v=${video.key}`} rel="noopener noreferrer" >
            <img className="img-fluid" src={`https://img.youtube.com/vi/${video.key}/default.jpg`} alt={video.name} />
          </a>
        </div>
      ))}
    </div>);
};

export default withMovie(MovieVideo);