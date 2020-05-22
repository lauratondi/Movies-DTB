import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ siteTitle }) => {
  return (
    <nav className='navbar bg-primary'>
      <i className='fas fa-film fa-5x'></i>
      <Link to='/'>
        <h1>
          <b>Movies Database</b>
        </h1>
      </Link>
    </nav>
  );
};

Navbar.defaultProps = {
  siteTitle: 'Movies Database',
};

Navbar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Navbar;
