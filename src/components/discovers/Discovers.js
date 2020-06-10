import React, { useEffect, useState, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';
import { getYear, setLoading, clearMovies } from '../../actions/movieActions';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DiscoverItem from '../discovers/DiscoverItem';

const Discovers = ({ clearMovies, getYear, setLoading, movies, loading }) => {
  useEffect(() => {
    clearMovies();
    // eslint-disable-next-line
  }, []);

  const [year, setYear] = useState('');
  // const [page, setPage] = useState('');

  // const fetchMoreData = () => {
  //   setPage(page + 1);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading();
    getYear(year);
    setYear('');
  };

  const onChange = (e) => {
    setYear(e.target.value);
  };

  // const onClick = (e) => {
  //   e.preventDefault();
  //   // setLoading();
  //   getYear(year);
  //   getYear(page + 1);
  //   setPage('');
  // };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <form onSubmit={onSubmit} className='form-year'>
          <input
            className='formInput'
            type='text'
            name='year'
            placeholder='Search By Year...'
            value={year}
            onChange={onChange}
            required
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

        {/* <InfiniteScroll
          pageStart={0}
          loadMore={fetchMoreData}
          hasMore={true}
          loader={<div key={0}>Loading...</div>}
          useWindow={false}
        > */}
        <div className='container-movies'>
          {movies.total_results > 0 &&
            movies.results.map((movie, index) => (
              <DiscoverItem key={index} movie={movie} />
            ))}
        </div>
        {/* </InfiniteScroll> */}
      </Fragment>
    );
  }
};

Discovers.propTypes = {
  clearMovies: PropTypes.func.isRequired,
  getYear: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, {
  clearMovies,
  getYear,
  setLoading,
})(Discovers);
