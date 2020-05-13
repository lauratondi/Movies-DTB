import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ siteTitle }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fas fa-film fa-5x' />{' '}
        <Link className='navLink' to='/'>
          <b>Movies Database</b>
        </Link>
      </h1>
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
