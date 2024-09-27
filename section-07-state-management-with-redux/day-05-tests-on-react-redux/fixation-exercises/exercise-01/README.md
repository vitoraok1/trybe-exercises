# Exercise 01 

## Test with Redux

In the code below:

- Create a test with the default value of the `reducer` and test if clicking the buttons correctly increments the global state value.
- Change the initial `count` global state value to 5 and test that the buttons correctly increment the global state value.

```
//App.js
import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';
import './style.css';

class App extends React.Component {
  render() {
    const { dispatch, countState } = this.props;
    return (
      <div className="container">
        <h1>Contador</h1>
        <h2>{countState}</h2>
        <button onClick={() => dispatch(actionCreator())}>Incrementa 1</button>
        <button onClick={() => dispatch(actionCreator(5))}>Incrementa 5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
});

export default connect(mapStateToProps)(App);

```
