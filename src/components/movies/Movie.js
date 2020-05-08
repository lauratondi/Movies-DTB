import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
// import MovieItem from './MovieItem';
import { getMovie } from '../../actions/movieActions';
// import Spinner from '../layout/Spinner';

import PropTypes from 'prop-types';

const Movie = ({ getMovie, movie: { title, poster, year, plot, loading } }) => {
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>Loading..</div>;
  } else {
    return (
      <Fragment>
        {title} : {plot}
      </Fragment>
    );
  }
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getMovie })(Movie);
