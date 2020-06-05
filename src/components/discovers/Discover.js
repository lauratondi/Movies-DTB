import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetail, setLoading } from '../../actions/movieActions';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Discover = ({ getDetail, setLoading, loading, movie, match }) => {
  useEffect(() => {
    getDetail(match.params.id);
    setLoading();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='container-movie'>
        <div className='poster'>
          <img
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt=''
          />
        </div>
        <div className='info bg-grey'>
          <h2>{movie.title}</h2>
          <ul>
            <li>
              <b>Genres</b>{' '}
              {movie.genres &&
                movie.genres.map((genre) => (
                  <span key={genre.id}>
                    {genre.name}
                    {', '}
                  </span>
                ))}
            </li>
            <li>
              <b>Runtime:</b> {movie.runtime}
            </li>
            <li>
              <b>Release:</b> {movie.release_date}
            </li>
            <li>
              <b>Original title:</b> {movie.original_title}
            </li>
            <li>
              <b>Original language:</b> {movie.original_language}
            </li>
            <li>
              <b>Vote average:</b> {movie.vote_average}
            </li>
            <li>
              <b>Tagline:</b> {movie.tagline}
            </li>
          </ul>
        </div>
        <div className='plot bg-grey'>
          <b>Overview:</b>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
  }
};

Discover.propTypes = {
  movie: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  getDetail: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  loading: state.movies.loading,
});

export default connect(mapStateToProps, { getDetail, setLoading })(Discover);
