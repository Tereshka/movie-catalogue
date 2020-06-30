import React from 'react';
import { withAuth } from '../../hoc/withAuth';
import { withMovie } from '../../hoc/withMovie';
import { Favorite, FavoriteBorder, Bookmark, BookmarkBorder } from '@material-ui/icons';

function ActionIcons(props) {
  const { currentMovie } = props;
  const { user } = props.auth;
  const { moviesFavourite, moviesWillWatch } = props.movie;
  const { setWatchList, setFavouriteMovie } = props.movieActions;

  const isInArray = (movie, array) => {
    if (array.map(m => m.id).find(el => el === movie.id)) {
      return true;
    }
    return false;
  }

  let isFavourite = isInArray(currentMovie, moviesFavourite);
  let inWatchList = isInArray(currentMovie, moviesWillWatch);

  return user ? 
    (<div>
      {isFavourite &&
        <Favorite color="secondary" className="icon" onClick={() => setFavouriteMovie(currentMovie, false)} />
      }
      {!isFavourite &&
        <FavoriteBorder color="secondary" className="icon" onClick={() => setFavouriteMovie(currentMovie, true)} />
      }
      {inWatchList &&
        <Bookmark className="icon" onClick={() => setWatchList(currentMovie, false)} />
      }
      {!inWatchList &&
        <BookmarkBorder className="icon" onClick={() => setWatchList(currentMovie, true)} />
      }
    </div>) : (<></>);
};

export default withAuth(withMovie(ActionIcons));