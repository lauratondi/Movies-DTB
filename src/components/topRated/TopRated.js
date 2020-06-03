import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getTopRated } from '../../actions/movieActions';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import TopItem from '../topRated/TopItem';

const TopRated = ({ getTopRated, movies, loading }) => {
  useEffect(() => {
    getTopRated();
    // eslint-disable-next-line
  }, []);

  const onClick = (e) => {
    getTopRated(movies.page + 1);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div className='container-movies'>
          {movies.total_results > 0
            ? movies.results.map((movie, index) => (
                <TopItem key={index} movie={movie} />
              ))
            : null}
        </div>
        <div className='load'>
          <button className='btn btn-primary' onClick={onClick}>
            Load more
          </button>
        </div>
      </Fragment>
    );
  }
};

TopRated.propTypes = {
  getTopRated: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, {
  getTopRated,
})(TopRated);
