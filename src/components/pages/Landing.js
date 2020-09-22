import React, { Fragment } from 'react';
import Search from '../movies/Search';
import Movies from '../movies/Movies';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ loading }) => {
  return (
    <Fragment>
      <Search />
      {loading ? <Spinner /> : <Movies />}
    </Fragment>
  );
};

Landing.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Landing);
