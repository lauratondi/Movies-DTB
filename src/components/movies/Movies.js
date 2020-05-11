import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
// import { getMovie } from '../../actions/movieActions';
import Spinner from '../layout/Spinner';

import PropTypes from 'prop-types';

const Movies = ({ movies }) => {
  let content = '';

  content =
    movies.Response === 'True'
      ? movies.Search.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))
      : null;
  return <div className='row'>{content}</div>;
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  // loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(Movies);
