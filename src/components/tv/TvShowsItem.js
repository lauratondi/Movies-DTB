import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TvShowsItem = ({ movie }) => {
  return (
    <div className='card bg-black'>
      <div className='card-image'>
        <span className='rate'>{movie.vote_average}</span>
        <Link to={`/tv/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt=''
          />
        </Link>
      </div>
      <div className='title'>
        <h5>{movie.name}</h5>
      </div>
      <div className='year'>
        <p>{movie.first_air_date.split('-')[0]}</p>
      </div>
    </div>
  );
};

TvShowsItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default TvShowsItem;
