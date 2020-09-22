import React, { useEffect } from 'react';
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
              <b>Last episode:</b> {movie.last_air_date}
            </li>
            {movie.next_episode_to_air && (
              <li>
                <b>Next episode:</b> {movie.next_episode_to_air}
              </li>
            )}
            <li>
              <b>Episode runtime:</b> {movie.episode_run_time} min.
            </li>
            <li>
              <b>Number of seasons:</b> {movie.number_of_seasons}
            </li>
            <li>
              <b>Number of episodes:</b> {movie.number_of_episodes}
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
            <li>
              <b>Status:</b> {movie.status}
            </li>
            <li>
              <b>Created by:</b>{' '}
              {movie.created_by &&
                movie.created_by.map((item) => (
                  <span key={item.id}>
                    {item.name}
                    {', '}
                  </span>
                ))}
            </li>
            <li>
              <b>Production companies:</b>{' '}
              {movie.production_companies &&
                movie.production_companies.map((item) => (
                  <span key={item.id}>
                    {item.name}
                    {', '}
                  </span>
                ))}
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
