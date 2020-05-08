import React, { useContext } from 'react';
import MovieItem from './MovieItem';
// import Spinner from '../layout/Spinner';
import MovieContext from '../context/movie/movieContext';
// import PropTypes from 'prop-types';

const Movies = () => {
  const movieContext = useContext(MovieContext);

  const { loading, movies } = movieContext;

  if (loading) {
    return <div>Loading..</div>;
  } else {
    return (
      <div style={userStyle}>
        {/* I pass the user object as props in the userItem */}
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

// Movies.propTypes = {
//   movies: PropTypes.object.isRequired,
// };

export default Movies;
