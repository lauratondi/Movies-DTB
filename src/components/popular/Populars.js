import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { searchPopulars, getPopulars } from '../../actions/movieActions';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PopularItem from '../popular/PopularItem';

const Populars = ({ searchPopulars, getPopulars, movies, loading }) => {
  useEffect(() => {
    searchPopulars();
    getPopulars();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div className='container-movies'>
          {movies.total_results > 0
            ? movies.results.map((movie, index) => (
                <PopularItem key={index} movie={movie} />
              ))
            : null}
        </div>
      </Fragment>
    );
  }
};

Populars.propTypes = {
  searchPopulars: PropTypes.func.isRequired,
  getPopulars: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, {
  searchPopulars,
  getPopulars,
})(Populars);
