import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super()

   this.state = {
    nameValue: '',
    ageValue: '',
    descrValue: '',
    favFood: 'strogonoff'
   };

  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.value;

    this.setState({ 
      [name]: value,
    });
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
            onChange={this.handleChange}
          />
        </label>

        <label>
          Qual sua idade?
          <input
            type="number"
            name="ageValue"
            value={this.state.ageValue}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Descreva um pouco sobre você:
          <textarea
          name="descrValue"
          value={this.state.descrValue}
          onChange={this.handleChange}
          />
        </label>

        <label>
          Qual sua comida favorita?
          <select
          name="favFood"
          value={this.state.favFood}
          onChange={this.handleChange}
          >
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