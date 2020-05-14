import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPopular, setLoading } from '../../actions/movieActions';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Popular = ({ getPopular, setLoading, loading, movie, match }) => {
  useEffect(() => {
    getPopular(match.params.id);
    setLoading();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return movie.length > 0 ? (
      <Fragment>
        {movie.title} : {movie.overview}
        <button>
          <Link to='/'>Go Back to Search</Link>
        </button>
      </Fragment>
    ) : null;
  }
};

Popular.propTypes = {
  movie: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  getPopular: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  loading: state.movies.loading,
});

export default connect(mapStateToProps, { getPopular, setLoading })(Popular);
