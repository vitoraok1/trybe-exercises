import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.clickButton1 = this.clickButton1.bind(this);
  }
  
  clickButton1 () {
    console.log('Test log one');
    console.log(this);
  }
  
  clickButton2 = () => {
    console.log('Test log two');
    console.log(this);
  }
  
  clickButton3 = () => {
    console.log('Test log three');
    console.log(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickButton1}>Test Button One</button>
        <button onClick={this.clickButton2}>Test Button Two</button>
        <button onClick={this.clickButton3}>Test Button Three</button>
      </div>
    );
  }
}

export default App;
