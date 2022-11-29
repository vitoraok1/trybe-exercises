import React from 'react';
import './App.css';

function clickButton() {
  console.log('Test log');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={clickButton}>Test Button</button>
      </div>
    );
  }
}

export default App;
