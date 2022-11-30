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
    agreeInfo: false,
    errorForm: true,
   };

  }

  handleError = () => {
    const {
      nameValue,
      ageValue,
      descrValue,
      agreeInfo 
    } = this.state;

    const errorCases = [
      !nameValue.length,
      !ageValue.length,
      !descrValue.length,
      !agreeInfo
    ];

    const completedForm = errorCases.every((error) => error !== true);

    this.setState({
      errorForm: !completedForm,
    });
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ 
      [name]: value,
    }, this.handleError);
  };

  render() {
    const { nameValue, ageValue, descrValue, favFood, agreeInfo, errorForm } = this.state;

    return (
      <div className="form">
        <form>
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
        <span className="error-message">
          { errorForm 
          ? <span style={ { color:'red' } }>Preencha todos campos</span>
          : <span style={ { color:'green' } }>Todos campos foram preenchidos</span>
          }
        </span>
      </div>
    );
  }
};

export default Form;