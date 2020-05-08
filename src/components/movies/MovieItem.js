import React from 'react';
import PropTypes from 'prop-types';
// import { getMovie } from '../../actions/movieActions';

// import { Link } from 'react-router-dom'

const MovieItem = ({ movie: { poster, title, year } }) => {
  return (
    <div className='card text-center'>
      <img
        src={poster}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h2>{title}</h2>
      <h3>{year}</h3>

      {/* <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                    More
                </Link>
            </div> */}
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
