import React from 'react';
import { render } from 'react-dom';
import App from './App';

// We create a renderApp so we can use it for both HMR and if HMR is off, then we just call
// it on the first render.
const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();

// If app has HMR on for this particular build. 'module' is given by webpack
if (module.hot) {
  // Then everytime App changes this function will be called. So if <App> changes the whole
  // app will be replaced. This is needed when using HMR and only for the top level component
  module.hot.accept('./App', () => {
    renderApp();
  });
}
