import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import MovieItem from './MovieItem';
import { getMovie, setLoading } from '../../actions/movieActions';
import Spinner from '../layout/Spinner';

import PropTypes from 'prop-types';

const Movie = ({ getMovie, setLoading, loading, movie, match }) => {
  useEffect(() => {
    getMovie(match.params.id);
    setLoading();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return movie.Response === 'True' ? (
      <section className='container-movie'>
        <div className='poster'>
          <img src={movie.Poster} alt='' />
        </div>
        <div className='info bg-grey'>
          <h2>{movie.Title}</h2>
          <ul>
            <li>
              <b>Genre:</b> {movie.Genre}
            </li>
            <li>
              <b>Runtime:</b> {movie.Runtime}
            </li>
            <li>
              <b>Released:</b> {movie.Released}
            </li>
            <li>
              <b>Language:</b> {movie.Language}
            </li>
            <li>
              <b>Country:</b> {movie.Country}
            </li>
            <li>
              <b>imdb Rating:</b> {movie.imdbRating}
            </li>
            <li>
              <b>Director:</b> {movie.Director}
            </li>
            <li>
              <b>Writer:</b> {movie.Writer}
            </li>
            <li>
              <b>Actors:</b> {movie.Actors}
            </li>
            <li>
              <b>Awards:</b> {movie.Awards}
            </li>
          </ul>
        </div>
        <div className='plot bg-grey'>
          <b>Overview:</b>
          <p>{movie.Plot}</p>
        </div>
      </section>
    ) : (
      <h3>Sorry, movie not found</h3>
    );
  }
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  getMovie: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  loading: state.movies.loading,
});

export default connect(mapStateToProps, { getMovie, setLoading })(Movie);
