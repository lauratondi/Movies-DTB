import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Movies = ({ getMovies, movies, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='container-movies'>
        {movies.Response === 'True'
          ? movies.Search.map((movie, index) => (
              <MovieItem key={index} movie={movie} />
            ))
          : null}
      </div>
    );
  }
};

Movies.propTypes = {
  movies: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(Movies);
