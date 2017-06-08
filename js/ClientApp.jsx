import React from 'react';
import { render } from 'react-dom';
// Importing HashRouter & Route
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

/* Setting HashRouter as the top level item of our App. HashRouter is a higher order component, in that it doesn't
   render itself anything out. What it does is do the routing & tell it what markup to render.
   It introduces and encapsulates behavior (the routing), but doesn't encapsulate style or markup
   */
const App = () => (
  <HashRouter>
    <div className="app">
      {/* We have one route inside our HashRouter, setting it to have exactly the path "/" so if this doesn'this
      match then the route will not be hit. component points to the Component that needs to be rendered */}
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </div>
  </HashRouter>
);

render(<App />, document.getElementById('app'));
