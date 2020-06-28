import React, { Component } from 'react';

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="h1">Error 404</h1>
        <p data-testid="p"> Page not Found</p>
      </div>
    );
  }
}
