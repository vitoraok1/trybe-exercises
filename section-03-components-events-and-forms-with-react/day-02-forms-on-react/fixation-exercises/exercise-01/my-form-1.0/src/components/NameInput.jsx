import React from 'react';

class NameInput extends React.Component {
  render() {
    const { nameValue, handleChange } = this.props;

    let error = undefined;
    if (nameValue.length > 12) {
      error = 'Nome muito grande!';
    };
    
    return (
      <label>
              Qual seu nome?
              <input
                type="text"
                name="nameValue"
                value={nameValue}
                onChange={handleChange}
              />
              <br />
              <span>{ error ? error : '' }</span>
            </label>
    );
  }
}

export default NameInput;
