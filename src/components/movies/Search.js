import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  searchMovies,
  getMovies,
  setLoading,
} from '../../actions/movieActions';

const Search = ({ searchMovies, getMovies, setLoading }) => {
  useEffect(() => {
    searchMovies();
    // eslint-disable-next-line
  }, []);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    getMovies(text);
    setLoading();
    setText('');
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search for Movies...'
          value={text}
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
  getMovies: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   text: state.movie.text,
// });

export default connect(null, {
  searchMovies,
  getMovies,
  setLoading,
})(Search);
