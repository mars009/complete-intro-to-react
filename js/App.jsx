/* @flow */
import React from 'react';
// Importing BrowserRouter & Route
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// We import the 'Match' type so flow can understand it
import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

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
        <Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
        {/* We use a function to return our Details component. This way we can pass the show into it in a simple way*/}
        {/* Sinde Details is being used as a Route component it might need to have the route props available.
         We pass in the show and the rest of the props to Details.*/}
        <Route
          path="/details/:id"
          component={(
            props: { match: Match } // Here we specify the type Match in props.match. So props is an object, which has an object 'match' of type Match
          ) => <Details show={preload.shows.find(show => props.match.params.id === show.imdbID)} {...props} />}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
