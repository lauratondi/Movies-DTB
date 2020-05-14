import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { getMovie } from '../../actions/movieActions';

import { Link } from 'react-router-dom';

const PopularItem = ({ movie }) => {
  return (
    <div className='movieItem'>
      <img
        src={movie.poster_path}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h2>{movie.title}</h2>
      <h3>{movie.release_date}</h3>
      <h3>{movie.id}</h3>

      <Link to={`/populars/${movie.id}`}>More</Link>
    </div>
  );
};

PopularItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default PopularItem;
