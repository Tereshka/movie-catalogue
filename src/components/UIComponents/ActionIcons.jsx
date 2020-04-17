import React from 'react';
import { Favorite, FavoriteBorder, Bookmark, BookmarkBorder } from '@material-ui/icons';

export default class ActionIcons extends React.Component {

  isInArray(movie, array) {
    if (array.map(m => m.id).find(el => el === movie.id)) {
      return true;
    }
    return false;
  }

  render() {
    const { movie, user, moviesFavourite, moviesWillWatch, setWatchList, setFavouriteMovie } = this.props;
    let isFavourite = this.isInArray(movie, moviesFavourite);
    let inWatchList = this.isInArray(movie, moviesWillWatch);

    return user ? 
      (<div>
        {isFavourite &&
          <Favorite color="secondary" className="icon" onClick={() => setFavouriteMovie(movie, false)} />
        }
        {!isFavourite &&
          <FavoriteBorder color="secondary" className="icon" onClick={() => setFavouriteMovie(movie, true)} />
        }
        {inWatchList &&
          <Bookmark className="icon" onClick={() => setWatchList(movie, false)} />
        }
        {!inWatchList &&
          <BookmarkBorder className="icon" onClick={() => setWatchList(movie, true)} />
        }
      </div>) : (<></>);
  }
}