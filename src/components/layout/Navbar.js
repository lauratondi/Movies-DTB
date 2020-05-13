import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ siteTitle }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fas fa-film' /> <Link to='/'>{siteTitle}</Link>
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
