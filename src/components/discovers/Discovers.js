import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getDiscovers, getYear } from '../../actions/movieActions';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DiscoverItem from '../discovers/DiscoverItem';
import Filter from '../discovers/Filter';

const Discovers = ({ getDiscovers, getYear, movies, loading }) => {
  useEffect(() => {
    getDiscovers();
    // eslint-disable-next-line
  }, []);

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
    getDiscovers(movies.page + 1);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <form onSubmit={onSubmit} className='form'>
          <input
            className='formInput'
            type='year'
            name='year'
            placeholder='Search Movies...'
            value={year}
            onChange={onChange}
          />
        </form>
        {/* <Filter /> */}
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

Discovers.propTypes = {
  getDiscovers: PropTypes.func.isRequired,
  getYear: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, {
  getDiscovers,
  getYear,
})(Discovers);
