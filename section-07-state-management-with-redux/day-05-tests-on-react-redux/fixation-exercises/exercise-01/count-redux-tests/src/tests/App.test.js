import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import App from './App';
import { legacyCreateStore as createStore, combineReducers } from 'redux';
import counterReducer from './redux/reducers/counterReducer';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ counterReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

describe('Testa o clique dos botões', () => {
  it('Verifica se com o valor padrão do reducer, os botões devem incrementar os valores corretamente', () => {

  });

  it('Verifica se alterando o valor inicial do estado global para 5 os botoes incrementam o valor corretamente', () => {

  });
})