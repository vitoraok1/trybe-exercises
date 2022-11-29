import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.clickButton2 = this.clickButton2.bind(this);
    this.clickButton3 = this.clickButton3.bind(this);

    this.state = {
      clickBtn1: 0,
      clickBtn2: 0,
      clickBtn3: 0,
    }
  }

  getBtnColor(num) {
    if (num % 2 === 0) {
      return 'green';
    } else {
      return 'white';
    }
  }

  clickButton1 = () => {
    const { clickBtn1 } = this.state;
    this.setState((previousState, props_) => ({
      clickBtn1: previousState.clickBtn1 + 1
    }), () => {
      console.log(`Button 1 ${this.getBtnColor(clickBtn1)}`)
    });
  }
  
  clickButton2 () {
    const { clickBtn2 } = this.state;
    this.setState((previousState, props_) => ({
      clickBtn2: previousState.clickBtn2 + 1
    }), () => {
      console.log(`Button 2 ${this.getBtnColor(clickBtn2)}`)
    });
  }
  
  clickButton3 () {
    const { clickBtn3 } = this.state;
    this.setState((previousState, props_) => ({
      clickBtn3: previousState.clickBtn3 + 1
    }), () => {
      console.log(`Button 2 ${this.getBtnColor(clickBtn3)}`)
    });
  }

  render() {
    const { clickBtn1, clickBtn2, clickBtn3 } = this.state;

    return (
      <div>
        <button 
        onClick={ this.clickButton1 }
        style={ { backgroundColor: this.getBtnColor(clickBtn1) } }
        >
          { clickBtn1 }
        </button>

        <button 
        onClick={ this.clickButton2 }
        style={ { backgroundColor: this.getBtnColor(clickBtn2) } }
        >
          { clickBtn2 }
        </button>

        <button 
        onClick={ this.clickButton3 }
        style={ { backgroundColor: this.getBtnColor(clickBtn3) } }
        >
          { clickBtn3 }
        </button>
      </div>
    );
  }
}

export default App;
