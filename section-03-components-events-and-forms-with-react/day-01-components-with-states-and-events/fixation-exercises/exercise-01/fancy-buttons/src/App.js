import React from 'react';
import './App.css';

function clickButton1() {
  console.log('Test log one');
}

function clickButton2() {
  console.log('Test log two');
}

function clickButton3() {
  console.log('Test log three');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={clickButton1}>Test Button One</button>
        <button onClick={clickButton2}>Test Button Two</button>
        <button onClick={clickButton3}>Test Button Three</button>
      </div>
    );
  }
}

export default App;
