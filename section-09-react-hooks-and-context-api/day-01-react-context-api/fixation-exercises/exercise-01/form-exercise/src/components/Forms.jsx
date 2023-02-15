import React, { useState } from 'react'
import './Forms.css';

export default function Forms() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [module, setModule] = useState();
  return (
    <section>
      <h1>Personal student form</h1>
      <div className="form-container">
        <form className="form-inputs">
          <input 
            type="text"
            placeholder="Nome completo"
            value={ name }
            onChange={ ({target: { value }}) => { setName(value)}}
          />
          <input
            type="number" 
            placeholder="Idade" 
            value={ age }
            onChange={ ({target: { value }}) => { setAge(value)}}
          />
          <input
            type="text"
            placeholder="Cidade" 
            value={ address }
            onChange={ ({target: { value }}) => { setAddress(value)}}
          />
          <div className="radio-container">
            <h4>
              Qual módulo está estudando?
            </h4>
            <div>
              <input
                type="radio" 
                id="fundamentals" 
                name="module" 
                value="Fundamentos"
                checked={ module === 'Fundamentos' }
                onChange={ ({target: { value }}) => { setModule(value)}}
              />
              <label htmlFor="fundamentals">Fundamentos</label>
            </div>
            <div>
              <input 
              type="radio" 
              id="front-end" 
              name="module" 
              value="Front-End"
              checked={ module === 'Front-End' }
              onChange={ ({target: { value }}) => { setModule(value)}}
            />
              <label htmlFor="front-end">Front-End</label>
            </div>
            <div>
              <input 
                type="radio" 
                id="back-end" 
                name="module" 
                value="Back-End"
                checked={ module === 'Back-End' }
                onChange={ ({target: { value }}) => { setModule(value)}}
              />
              <label htmlFor="back-end">Back-End</label>
            </div>
            <div>
              <input 
                type="radio" 
                id="ciencias" 
                name="module" 
                value="Ciências da Computação"
                checked={ module === 'Ciências da Computação' }
                onChange={ ({target: { value }}) => { setModule(value)}} 
              />
              <label htmlFor="ciencias">Ciências da Computação</label>
            </div>
          </div>
          <button
            type="button"
            onClick={ () => console.log('Formulário Enviado')}
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
