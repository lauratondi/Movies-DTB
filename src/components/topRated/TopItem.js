import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopItem = ({ movie }) => {
  return (
    <div className='card bg-black'>
      <div className='card-image'>
        <span className='rate'>{movie.vote_average}</span>
        <Link to={`/topRated/${movie.id}`}>
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
        <p>{movie.release_date.split('-')[0]}</p>
      </div>
    </div>
  );
};

TopItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default TopItem;
