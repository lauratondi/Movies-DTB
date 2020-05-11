import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
// import MovieItem from './MovieItem';
import { getMovie, setLoading } from '../../actions/movieActions';
import Spinner from '../layout/Spinner';

import PropTypes from 'prop-types';

const Movie = ({ getMovie, setLoading, loading, movie }) => {
  useEffect(() => {
    getMovie();
    setLoading();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        {movie.Title} : {movie.Plot}
      </Fragment>
    );
  }
};

Movie.propTypes = {
  movie: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  getMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  loading: state.movies.loading,
});

export default connect(mapStateToProps, { getMovie, setLoading })(Movie);
