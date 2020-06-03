import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getDiscovers } from '../../actions/movieActions';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DiscoverItem from '../discovers/DiscoverItem';

const Populars = ({ getDiscovers, movies, loading }) => {
  useEffect(() => {
    getDiscovers();
    // eslint-disable-next-line
  }, []);

  const onClick = (e) => {
    getDiscovers(movies.page + 1);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div className='container-movies'>
          {movies.total_results > 0
            ? movies.results.map((movie, index) => (
                <DiscoverItem key={index} movie={movie} />
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

Populars.propTypes = {
  getDiscovers: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, {
  getDiscovers,
})(Populars);
