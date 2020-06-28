import React from 'react';
import ReactDOM from 'react-dom';
import Price from './../index';

/* import { isTSAnyKeyword } from '@babel/types'; */

it('renders without crashing', () => {
  const p = document.createElement('p');
  ReactDOM.render(<Price></Price>, p);
});
