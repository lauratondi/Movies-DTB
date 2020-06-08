import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  getTvshows,
  getTvLessP,
  getTvNew,
  getTvOld,
} from '../../actions/movieActions';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import TvShowsItem from '../tv/TvShowsItem';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const TvShows = ({
  getTvshows,
  getTvLessP,
  getTvNew,
  getTvOld,
  movies,
  loading,
}) => {
  useEffect(() => {
    getTvshows();
    // eslint-disable-next-line
  }, []);

  const onClick = (e) => {
    getTvshows(movies.page + 1);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        {/* <div className='sort-by'>
          Sort by:
          <button className='btn btn-secondary' onClick={() => getTvshows()}>
            Most Popular
          </button>
          <button className='btn btn-secondary' onClick={() => getTvLessP()}>
            Less Popular
          </button>
          <button className='btn btn-secondary' onClick={() => getTvNew()}>
            Newest
          </button>
          <button className='btn btn-secondary' onClick={() => getTvOld()}>
            Oldest
          </button>
        </div> */}
        <DropdownButton id='dropdown-item-button' title='Sort by'>
          <Dropdown.Item as='button' onClick={() => getTvshows()}>
            Most Popular
          </Dropdown.Item>
          <Dropdown.Item as='button' onClick={() => getTvLessP()}>
            Less Popular
          </Dropdown.Item>
          <Dropdown.Item as='button' onClick={() => getTvNew()}>
            Newest
          </Dropdown.Item>
          <Dropdown.Item as='button' onClick={() => getTvOld()}>
            Oldest
          </Dropdown.Item>
        </DropdownButton>

        <div className='container-movies'>
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
  getTvLessP: PropTypes.func.isRequired,
  getTvNew: PropTypes.func.isRequired,
  getTvOld: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, {
  getTvshows,
  getTvLessP,
  getTvNew,
  getTvOld,
})(TvShows);
