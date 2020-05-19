import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      <ul>
        <li>
          <i className='fas fa-fire-alt fa-xs'></i>
          <Link to='/populars'> Populars</Link>
        </li>
        <li>
          <i className='fas fa-gift fa-xs'></i>
          <Link to='/discover'> Discover</Link>
        </li>
        <li>
          <i className='fas fa-star fa-xs'></i>
          <Link to='/topRated'> Top Rated</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
