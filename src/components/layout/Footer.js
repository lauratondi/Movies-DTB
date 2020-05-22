import React from 'react';
import TMDBlogo from '../../assets/img/TMDBlogo.svg';

const Footer = () => {
  return (
    <footer>
      <img src={TMDBlogo} alt='ref' className='logo' />
      <p>
        This website uses the{' '}
        <a
          href='https://www.themoviedb.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          TMDb
        </a>{' '}
        and{' '}
        <a
          href='http://www.omdbapi.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          OMDB
        </a>{' '}
        API, but it's not endorsed or certified by them.
      </p>
    </footer>
  );
};

export default Footer;
