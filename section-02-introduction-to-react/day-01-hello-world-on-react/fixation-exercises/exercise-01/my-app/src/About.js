import React from 'react';
import './App.css';

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <h1 className='name-title'>
          Vitor Aoki
        </h1>
        <p>
          Paranaense, 28 anos, Estudante de Programação
        </p>
        <h2>
          Minhas Habilidades
        </h2>
        <ul className='skills-list'>
          <li>
            Proatividade
          </li>
          <li>
            Comunicação
          </li>
          <li>
            Vontade de aprender
          </li>
        </ul>
      </div>
    );
  }
}

export default MyApp;