import React, { Fragment } from 'react';
import Search from '../movies/Search';
import Menu from '../layout/Menu';
import Movies from '../movies/Movies';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ loading }) => {
  return (
    <div className='landing bg-grey'>
      <Menu />
      <Search />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {' '}
          <Movies />{' '}
        </div>
      )}
    </div>
  );
};

Landing.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Landing);
