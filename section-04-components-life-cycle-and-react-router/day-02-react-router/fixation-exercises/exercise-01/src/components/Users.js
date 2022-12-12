import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const {
      greetingMessage = 'Hi There',
      match: { params: { id }
    } } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <Link to="/">Home</Link>
        <p> { `${greetingMessage} User ${id}` }, this is awesome Users component </p>
      </div>
    );
  }
};

export default Users;
