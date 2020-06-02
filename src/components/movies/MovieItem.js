import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div className='card bg-black'>
      <div className='card-image'>
        <Link to={`/movie/${movie.imdbID}`}>
          <img src={movie.Poster} alt='' />
        </Link>
      </div>
      <div className='title'>
        <h5>{movie.Title}</h5>
      </div>
      <div className='year'>
        <p>{movie.Year}</p>
      </div>

      <Link to={`/movies/${movie.imdbID}`}>More</Link>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
