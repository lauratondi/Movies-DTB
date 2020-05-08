import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchMovies } from '../../actions/movieActions';

const Search = ({ searchMovies }) => {
  useEffect(() => {
    searchMovies();
  }, [searchMovies]);

  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchMovies(title);
    setTitle('');
  };

  const onChange = (e) => setTitle(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='title'
          placeholder='Search for Movies...'
          value={title}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
};

Search.proptype = {
  searchMovies: PropTypes.func.isRequired,
};

export default connect(null, { searchMovies })(Search);
