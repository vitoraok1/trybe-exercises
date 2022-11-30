import React from 'react';

class FavoriteFood extends React.Component {
  render() {
    const { favFood, handleChange } = this.props;
    return (
      <label>
              Qual sua comida favorita?
              <select
              name="favFood"
              value={favFood}
              onChange={handleChange}
              >
                <option value="strogonoff">Strogonoff de Frango</option>
                <option value="churrasco">Churrasco</option>
                <option value="japonesa">Comida Japonesa</option>
                <option value="lasanha">Lasanha</option>
              </select>
            </label>
    );
  }
}

export default FavoriteFood;
