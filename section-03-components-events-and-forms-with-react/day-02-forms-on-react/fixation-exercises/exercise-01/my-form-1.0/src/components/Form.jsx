import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super()

   this.state = {
    nameValue: ''
   };

  }

  handleTextAreaChange = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  render() {
    return (
      <form className="form">
        <label>
          Qual seu nome?
          <input
            type="text"
            name="nameValue"
            value={this.state.nameValue}
            onChange={this.handleTextAreaChange}/>
        </label>

        <label>
          Qual sua idade?
          <input type="number" />
        </label>

        <label>
          Descreva um pouco sobre você:
          <textarea />
        </label>

        <label>
          Qual sua comida favorita?
          <select>
            <option value="strogonoff">Strogonoff de Frango</option>
            <option value="churrasco">Churrasco</option>
            <option value="japonesa">Comida Japonesa</option>
            <option value="lasanha">Lasanha</option>
          </select>
        </label>
        
      </form>
    );
  }
};

export default Form;