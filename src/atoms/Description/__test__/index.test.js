import React from 'react';
import ReactDOM from 'react-dom';
import Description from './../index';
/* import { isTSAnyKeyword } from '@babel/types'; */
it('renders without crashing', () => {
  const p = document.createElement('p');
  ReactDOM.render(<Description></Description>, p);
});
