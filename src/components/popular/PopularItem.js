import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { getMovie } from '../../actions/movieActions';

import { Link } from 'react-router-dom';

const PopularItem = ({ movie }) => {
  return (
    <div className='movieItem'>
      <img
        src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
        alt=''
        className='round-img'
        style={{ width: '150px' }}
      />
      <h2>{movie.title}</h2>
      <h3>{movie.release_date.trim().split('-')[0]}</h3>

      <Link to={`/populars/${movie.id}`}>More</Link>
    </div>
  );
};

PopularItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default PopularItem;
