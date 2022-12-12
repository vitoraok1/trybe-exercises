import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/about">About</Link>
        <br />
        <Link to="/users">Users</Link>
        <p> My awesome Home component </p>
      </div>
    );
  }
}

export default Home;
