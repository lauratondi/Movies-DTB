import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PopularItem = ({ movie }) => {
  return (
    <div className='card bg-black'>
      <div className='card-image'>
        <span class='rate'>{movie.vote_average}</span>
        <Link to={`/populars/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt=''
          />
        </Link>
      </div>
      <div className='title'>
        <h5>{movie.title}</h5>
      </div>
      <div className='year'>
        <p>{movie.release_date.trim().split('-')[0]}</p>
      </div>
    </div>
  );
};

PopularItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default PopularItem;
