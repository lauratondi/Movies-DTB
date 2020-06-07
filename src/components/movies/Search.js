import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovies, setLoading, clearMovies } from '../../actions/movieActions';

const Search = ({ getMovies, setLoading, clearMovies }) => {
  // useEffect(() => {
  //   clearMovies();
  //   // eslint-disable-next-line
  // }, []);

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
        <i className='fas fa-search fa-2x'></i>
        <input
          className='formInput'
          type='text'
          name='text'
          placeholder='Search Movies...'
          value={text}
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
    </div>
  );
};

Search.proptype = {
  // searchMovies: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  clearMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, {
  getMovies,
  setLoading,
  clearMovies,
})(Search);
