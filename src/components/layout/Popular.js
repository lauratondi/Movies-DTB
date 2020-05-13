import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getPopularity } from '../../actions/movieActions';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import MovieItem from '../movies/MovieItem';

const Popular = ({ getPopularity, movies, loading }) => {
  useEffect(() => {
    getPopularity();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return movies.total_results > 0
      ? movies.results.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))
      : null;
  }
};

Popular.propTypes = {
  getPopularity: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { getPopularity })(Popular);
