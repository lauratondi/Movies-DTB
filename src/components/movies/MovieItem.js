import React from 'react';
import PropTypes from 'prop-types';
// import { getMovie } from '../../actions/movieActions';

import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div className='card bg-black'>
      <div className='card-image'>
        {/* <span className='rate'>7</span> */}
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
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
