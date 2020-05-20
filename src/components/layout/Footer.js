import React from 'react';
import { Link } from 'react-router-dom';
import TMDBlogo from '../../assets/img/TMDBlogo.svg';

const Footer = () => {
  return (
    <footer>
      <img src={TMDBlogo} alt='ref' className='logo' />
      <p>
        This website uses the <Link to='https://www.themoviedb.org/'>TMDb</Link>{' '}
        and
        <Link to='http://www.omdbapi.com/'>OMDB</Link> API, but it's not
        endorsed or certified by them.
      </p>
    </footer>
  );
};

export default Footer;
