import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import MovieState from './context/movie/MovieState';

const App = () => {
  return (
    <MovieState>
      <div className='App'>
        <Navbar />
        <Landing />
      </div>
    </MovieState>
  );
};

export default App;
