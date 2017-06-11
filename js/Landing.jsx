/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>svideo</h1>
    <input type="text" placeholder="Search" />
    {/* Link Component will generate a correct <a> with the correct url to go to */}
    <Link to="/search">or Browse All</Link>
  </div>
);

export default Landing;
