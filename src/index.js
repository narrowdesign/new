import React from 'react';
import { render } from 'react-dom';

import cxs from 'cxs';
import Portfolio from './components/Portfolio';

const Root = () => {
  return (
    <div className={cx.root} >
      <img src="/images/n.png" className={cx.logo} />
      <Portfolio />
    </div>
  )
}

const cx = {
  root: cxs({
    textAlign: 'center'
  }),
  logo: cxs({
    width: 60,
    margin: '5rem auto 3rem'
  }),
}

render (<Root />, document.querySelector('#app'));
