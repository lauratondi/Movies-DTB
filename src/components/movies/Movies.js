import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
// import { getMovie } from '../../actions/movieActions';
import Spinner from '../layout/Spinner';

import PropTypes from 'prop-types';

const Movies = ({ movie: { movies, loading } }) => {
  // useEffect(() => {
  //   getMovie();
  //   // eslint-disable-next-line
  // }, []);

  if (loading) {
    return (
      <Fragment>
        <Spinner />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)
        ) : (
          <h2>...</h2>
        )}
      </Fragment>
    );
  }
};

Movies.propTypes = {
  movie: PropTypes.object.isRequired,
  // getMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, {})(Movies);
