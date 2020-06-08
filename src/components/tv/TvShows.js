import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getTvshows, getTvMoreP } from '../../actions/movieActions';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import TvShowsItem from '../tv/TvShowsItem';

const TvShows = ({ getTvshows, getTvMoreP, movies, loading }) => {
  useEffect(() => {
    getTvshows();
    // eslint-disable-next-line
  }, []);

  //   const onChange = (e) => {
  //     getTvMoreP();
  //   };

  const onClick = (e) => {
    getTvshows(movies.page + 1);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div className='container-movies'>
          <div className='sort-by'>
            <span>Sort by</span>
            <button onClick={() => getTvMoreP()}>Most Popular</button>
          </div>

          {movies.total_results > 0
            ? movies.results.map((movie, index) => (
                <TvShowsItem key={index} movie={movie} />
              ))
            : null}
        </div>
        <div className='load'>
          <button className='btn btn-primary' onClick={onClick}>
            Load more
          </button>
        </div>
      </Fragment>
    );
  }
};

TvShows.propTypes = {
  getTvshows: PropTypes.func.isRequired,
  getTvMoreP: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, {
  getTvshows,
  getTvMoreP,
})(TvShows);
