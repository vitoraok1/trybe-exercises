import React from 'react';

class SelectInput extends React.Component {
  render() {
    const { ageValue, handleChange } = this.props;
    return (
      <label>
      Qual sua idade?
      <input
        type="number"
        name="ageValue"
        value={ageValue}
        onChange={handleChange}
      />
    </label>
    );
  }
}

export default SelectInput;
