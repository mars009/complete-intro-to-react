/* @flow */

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

// ES6 Class Component. All Component classes must have a render method that returns markup
class Search extends Component {
  // Levaraging the 'transform-class-properties' Babel transform, we don't have to write
  // a constructor and can just declare properties such as the state @ the class level
  state = {
    searchTerm: ''
  };

  // We define our prop types for Flow. In this case shows is an Array of any
  props: {
    shows: Array<Show>
  };

  // We need to bind the handler's "context" to be "Search", so whenever 'handleSearchTermChange'
  // gets called it will be using the right context. While this is usually done in the constructor
  // the 'transform-class-properties' Babel transform leverages a Stage 2 proposal so you can write
  // your function handlers like the one below and the Context will point to the Class
  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <Header searchTerm={this.state.searchTerm} showSearch handleSearchTermChange={this.handleSearchTermChange} />
        <div>
          {this.props.shows
            /* Filtering out any shows that don't contain the searchTerm in the title or description
            ~ Using >= 0 so the empty string will match all the titles/descriptions */
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
