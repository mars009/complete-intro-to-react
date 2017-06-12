/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props: { showSearch?: boolean, handleSearchTermChange?: Function, searchTerm?: string }) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input type="text" placeholder="text" value={props.searchTerm} onChange={props.handleSearchTermChange} />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }

  return (
    <header>
      <h1><Link to="/">svideo</Link></h1>
      {utilSpace}
    </header>
  );
};

// Specifying the defaultProps for our Header & so we can use the 'maybe' type "foo?" in our props
Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop() {},
  searchTerm: ''
};

export default Header;
