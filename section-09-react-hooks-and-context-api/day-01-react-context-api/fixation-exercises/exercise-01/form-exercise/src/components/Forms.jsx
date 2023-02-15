import React from 'react'
import './Forms.css';

export default function Forms() {
  return (
    <section>
      <h1>Personal student form</h1>
      <div className="form-container">
        <form className="form-inputs">
          <input type="text" placeholder="Nome completo"/>
          <input type="number" placeholder="Idade"/>
          <input type="text" placeholder="Cidade"/>
          <div className="radio-container">
            <h4>
              Qual módulo está estudando?
            </h4>
            <div>
              <input type="radio" id="fundamentos" name="module" value="fundamentos"/>
              <label htmlFor="fundamentos">Fundamentos</label>
            </div>
            <div>
              <input type="radio" id="front-end" name="module" value="front-end" />
              <label htmlFor="front-end">Front-End</label>
            </div>
            <div>
              <input type="radio" id="back-end" name="module" value="back-end" />
              <label htmlFor="back-end">Back-End</label>
            </div>
            <div>
              <input type="radio" id="ciencias" name="module" value="ciencias" />
              <label htmlFor="ciencias">Ciências da Computação</label>
            </div>
          </div>
          <button type="button">Enviar</button>
        </form>
      </div>
    </section>
  )
}
