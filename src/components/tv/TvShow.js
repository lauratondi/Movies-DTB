import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTvDetail, setLoading } from '../../actions/movieActions';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const TvShow = ({ getTvDetail, setLoading, loading, movie, match }) => {
  useEffect(() => {
    getTvDetail(match.params.id);
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
          <h2>{movie.name}</h2>
          <ul>
            <li>
              <b>Genres:</b>{' '}
              {movie.genres &&
                movie.genres.map((genre) => (
                  <span key={genre.id}>
                    {genre.name}
                    {', '}
                  </span>
                ))}
            </li>
            <li>
              <b>Release:</b> {movie.first_air_date}
            </li>
            <li>
              <b>Original title:</b> {movie.original_name}
            </li>
            <li>
              <b>Original language:</b> {movie.original_language}
            </li>
            <li>
              <b>Vote average:</b> {movie.vote_average}
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

TvShow.propTypes = {
  movie: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  getTvDetail: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  loading: state.movies.loading,
});

export default connect(mapStateToProps, { getTvDetail, setLoading })(TvShow);
