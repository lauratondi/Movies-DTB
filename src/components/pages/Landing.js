import React from 'react';
import Search from '../movies/Search';
import Movies from '../movies/Movies';

const Landing = () => {
  return (
    <div className='landing'>
      <h1>Search for your favourite movies</h1>
      <Search />
      <Movies movies={Movies.search} />
    </div>
  );
};

export default Landing;
