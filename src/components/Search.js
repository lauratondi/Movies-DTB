import React, { useState, useContext } from 'react';
import MovieContext from '../context/movie/movieContext';

const Search = () => {
  const movieContext = useContext(MovieContext);

  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    movieContext.searchMovies(title);
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

export default Search;
