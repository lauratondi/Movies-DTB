import React from 'react';
import Search from './Search';
import Movies from './Movies';

const Landing = () => {
  return (
    <div className='landing'>
      <h1>Search for your favourite movies</h1>
      <Search />
      <Movies />
    </div>
  );
};

export default Landing;
