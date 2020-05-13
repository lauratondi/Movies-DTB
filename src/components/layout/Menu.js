import React from 'react';
import { Link } from 'react-router-dom';
import Popular from '../layout/Popular';

const Menu = () => {
  return (
    <div className='menu'>
      <ul>
        <li>
          <Link to='/popular'>
            {' '}
            <h3>Popular</h3>
          </Link>
        </li>
        <li>
          <h3>Discover</h3>
        </li>
        <li>
          <h3>Top Rated</h3>
        </li>
      </ul>
    </div>
  );
};

export default Menu;