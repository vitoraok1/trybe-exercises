import React from 'react';

class NameInput extends React.Component {
  render() {
    const { nameValue, handleChange } = this.props;
    return (
      <label>
              Qual seu nome?
              <input
                type="text"
                name="nameValue"
                value={nameValue}
                onChange={handleChange}
              />
            </label>
    );
  }
}

export default NameInput;
