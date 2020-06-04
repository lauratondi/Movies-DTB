import React, { Fragment } from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{
        width: '200px',
        margin: 'auto',
        display: 'block',
        backgroundColor: '$grey-color',
      }}
    />
  </Fragment>
);

export default Spinner;
