import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Nach einer Vorlage hier mein minimales React-Setup mit Webpack und Babel';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

// accept code hot-reloading
module.hot.accept();