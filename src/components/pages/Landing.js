import React from 'react';
import Search from '../movies/Search';
import Movies from '../movies/Movies';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ loading }) => {
  return (
    <div className='landing'>
      <h1>Search for your favourite movies</h1>
      <Search />
      {loading ? <Spinner /> : <Movies />}
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
