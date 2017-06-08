import React from 'react';
import { render } from 'react-dom';
// Importing BrowserRouter & Route
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const FourOhFour = () => <h1>404 oh my!</h1>;

/* Setting BrowserRouter as the top level item of our App. BrowserRouter is a higher order component, in that it doesn't
   render itself anything out. What it does is do the routing & tell it what markup to render.
   It introduces and encapsulates behavior (the routing), but doesn't encapsulate style or markup
   */
const App = () => (
  <BrowserRouter>
    <div className="app">
      {/* The Switch Component renders exactly one component. So it will go in order trying to find the match
        and if nothing else matches it will return the Route for FourOhFour */}
      <Switch>
        {/* We have one route inside our Router, setting it to have exactly the path "/" so if this doesn'this
        match then the route will not be hit. component points to the Component that needs to be rendered */}
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
