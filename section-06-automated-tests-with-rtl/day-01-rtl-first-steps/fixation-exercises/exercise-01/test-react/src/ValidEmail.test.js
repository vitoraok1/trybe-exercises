import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './components/ValidEmail';

describe('Testando formato de email', () => {
  it('Testando um componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });
  
  it('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testando se o componente não é renderizado caso o input e-mail esteja vazio', () => {
    const EMAIL_USER = '';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.queryByTestId('id-is-email-valid');
    expect(isValid).not.toBeInTheDocument();
  });
});

