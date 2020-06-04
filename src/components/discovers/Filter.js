import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDiscovers, setLoading } from '../../actions/movieActions';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';

const Filter = ({ setLoading, getDiscovers, movies }) => {
  const rangeDate = (start, end) =>
    Array.from(
      { length: end - start },
      (value, key) => key + start + 1
    ).reverse();

  const [year, setYear] = useState(2020);

  const handleChange = (e) => {
    getDiscovers(year);
    setYear();
  };

  const handleClick = (e) => {
    setLoading();
    getDiscovers(year);
  };

  return (
    <div>
      <Dropdown
        options={rangeDate(1900, new Date().getFullYear())}
        name='year'
        value={year}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
};

Filter.propTypes = {
  setLoading: PropTypes.func.isRequired,
  getDiscovers: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { setLoading, getDiscovers })(Filter);
