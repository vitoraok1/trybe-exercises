import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        <Link to="/">Home</Link>
        <p> My awesome Users component </p>
      </div>
    );
  }
};

export default Users;
