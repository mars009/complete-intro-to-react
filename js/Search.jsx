import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

// ES6 Class Component. All Component classes must have a render method that returns markup
class Search extends Component {
  // Levaraging the 'transform-class-properties' Babel transform, we don't have to write
  // a constructor and can just declare properties such as the state @ the class level
  state = {
    searchTerm: ''
  };

  // We need to bind the handler's "context" to be "Search", so whenever 'handleSearchTermChange'
  // gets called it will be using the right context. While this is usually done in the constructor
  // the 'transform-class-properties' Babel transform leverages a Stage 2 proposal so you can write
  // your function handlers like the one below and the Context will point to the Class
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input type="text" placeholder="text" value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
        </header>
        <div>
          {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
