import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getYear, clearMovies } from '../../actions/movieActions';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DiscoverItem from '../discovers/DiscoverItem';

const Discovers = ({ clearMovies, getYear, movies, loading }) => {
  const [year, setYear] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    getYear(year);
    setYear('');
  };

  const onChange = (e) => {
    setYear(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    getYear(year.page + 1);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <form onSubmit={onSubmit} className='form-year'>
          <input
            className='formInput'
            type='year'
            name='year'
            placeholder='Search By Year...'
            value={year}
            onChange={onChange}
          />
        </form>
        <div className='buttons'>
          <button
            type='submit'
            value='Search'
            className='btn btn-primary'
            form='form'
            onClick={onSubmit}
          >
            Search
          </button>

          <button className='btn btn-primary' onClick={clearMovies}>
            Clear{' '}
          </button>
        </div>
        <div className='container-movies'>
          {movies.total_results > 0 &&
            movies.results.map((movie, index) => (
              <DiscoverItem key={index} movie={movie} />
            ))}
        </div>

        {movies.total_results > 0 ? (
          <div className='load'>
            <button className='btn btn-primary' onClick={onClick}>
              Load more
            </button>
          </div>
        ) : null}
      </Fragment>
    );
  }
};

Discovers.propTypes = {
  clearMovies: PropTypes.func.isRequired,
  getYear: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, {
  clearMovies,
  getYear,
})(Discovers);
