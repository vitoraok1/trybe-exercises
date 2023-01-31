import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { createStore, combineReducers } from 'redux';
import counterReducer from '../redux/reducers/counterReducer';
import userEvent from '@testing-library/user-event';

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
    renderWithRedux(<App />);

    const allBtns = screen.queryAllByRole('button');
    expect(allBtns.length).toBe(2);

    expect(screen.getByText('0')).toBeInTheDocument();

    userEvent.click(allBtns[0]);
    expect(screen.getByText('1')).toBeInTheDocument();

    userEvent.click(allBtns[1]);
    expect(screen.getByText('6')).toBeInTheDocument();
  });

  it('Verifica se alterando o valor inicial do estado global para 5 os botoes incrementam o valor corretamente', () => {

  });
})