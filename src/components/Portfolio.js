import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Match, Miss } from 'react-router';

import Projects from './Projects';

import cxs from 'cxs';

class Portfolio extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Projects} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Portfolio;
