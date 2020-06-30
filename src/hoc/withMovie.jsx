import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as movieActions from '../redux/movie/movieActions';

const mapStateToProps = state => {
  return {
    movie: state.movie,
  };
};

const mapDispatchToProps = dispatch => ({
  movieActions: bindActionCreators(movieActions, dispatch),
});

export const withMovie = Component =>
  connect(mapStateToProps, mapDispatchToProps)(
    class WithMovie extends React.Component {
      render() {
        return (<Component {...this.props} />);
      };
    });