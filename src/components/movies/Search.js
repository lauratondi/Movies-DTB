import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  searchMovies,
  getMovies,
  setLoading,
  clearMovies,
} from '../../actions/movieActions';

const Search = ({ searchMovies, getMovies, setLoading, clearMovies }) => {
  useEffect(() => {
    searchMovies();
    clearMovies();
    // eslint-disable-next-line
  }, []);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading();
    getMovies(text);
    setText('');
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className='search'>
      <h1>Search for your favourite movies</h1>

      <form onSubmit={onSubmit} className='form'>
        <i class='fas fa-search fa-2x'></i>
        <input
          className='formInput'
          type='text'
          name='text'
          placeholder='Search Movies...'
          value={text}
          onChange={onChange}
        />

        <input type='submit' value='Search' />
      </form>

      <button onClick={clearMovies}>Clear Search</button>
    </div>
  );
};

Search.proptype = {
  searchMovies: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  clearMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, {
  searchMovies,
  getMovies,
  setLoading,
  clearMovies,
})(Search);
