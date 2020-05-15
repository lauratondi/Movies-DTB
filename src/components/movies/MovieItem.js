import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { getMovie } from '../../actions/movieActions';

import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div className='movieItem'>
      <img
        src={movie.Poster}
        alt=''
        className='round-img'
        style={{ width: '150px' }}
      />
      <h2>{movie.Title}</h2>
      <h3>{movie.Year}</h3>

      <Link to={`/movie/${movie.imdbID}`}>More</Link>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
