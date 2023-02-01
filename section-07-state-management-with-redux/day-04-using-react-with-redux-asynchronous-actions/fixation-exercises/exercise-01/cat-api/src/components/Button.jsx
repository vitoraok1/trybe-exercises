import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../redux/actions';

class Button extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <button type="button" onClick={() => dispatch(fetchAPI())}>
        Procurar gatico!
      </button>
    );
  }
}

export default connect()(Button);
