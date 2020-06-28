import React from 'react';
import ReactDOM from 'react-dom';
import Name from './../index';
/* import { isTSAnyKeyword } from '@babel/types'; */
it('renders without crashing', () => {
  const p = document.createElement('p');
  ReactDOM.render(<Name></Name>, p);
});
