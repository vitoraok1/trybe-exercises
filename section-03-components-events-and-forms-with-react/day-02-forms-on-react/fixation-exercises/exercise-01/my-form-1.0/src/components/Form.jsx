import React from 'react';
import SelectInput from './SelectInput';
import NameInput from './NameInput';
import FavoriteFood from './FavoriteFood';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super()

   this.state = {
    nameValue: '',
    ageValue: '',
    descrValue: '',
    favFood: 'strogonoff',
    agreeInfo: false
   };

  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ 
      [name]: value,
    });
  };

  render() {
    const { nameValue, ageValue, descrValue, favFood, agreeInfo } = this.state;

    return (
      <form className="form">
        <fieldset>
          <legend>Informações pessoais</legend>
            <NameInput
              nameValue={ nameValue }
              handleChange={ this.handleChange }
            />
            <br/>
            <SelectInput
              ageValue={ ageValue }
              handleChange={ this.handleChange }
            />
            <br/>
            <FavoriteFood
            favFood = { favFood }
            handleChange={ this.handleChange }
            />
        </fieldset>

        <fieldset>
          <legend>Descrição e arquivos</legend>
            <label>
              Descreva um pouco sobre você:
              <br/>
              <textarea
              name="descrValue"
              value={descrValue}
              onChange={this.handleChange}
              />
            </label>
            <br/>
            <label>
              Envie uma selfie sua aqui:
              <br/>
              <input
                type="file"
              />
            </label>
            <br/>
            <label>
              Concorda com os termos?
              <input
                type="checkbox"
                name="agreeInfo"
                value={agreeInfo}
                onChange={this.handleChange}
              />
            </label>
        </fieldset>
      </form>
    );
  }
};

export default Form;