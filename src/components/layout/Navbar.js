import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ siteTitle }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>{siteTitle}</h1>
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
