import React, { Fragment, useEffect } from 'react';
import Link from 'react-dom';
import { connect } from 'react-redux';
// import MovieItem from './MovieItem';
import { getMovie, setLoading } from '../../actions/movieActions';
import Spinner from '../layout/Spinner';

import PropTypes from 'prop-types';

const Movie = ({ getMovie, setLoading, loading, movie, match }) => {
  useEffect(() => {
    getMovie(match.params.id);
    setLoading();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return movie.Response === 'True' ? (
      <Fragment>
        {movie.Title} : {movie.Plot}
        <button>
          <a href='/'>Go Back to Search</a>
        </button>
      </Fragment>
    ) : null;
  }
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  getMovie: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  loading: state.movies.loading,
});

export default connect(mapStateToProps, { getMovie, setLoading })(Movie);
