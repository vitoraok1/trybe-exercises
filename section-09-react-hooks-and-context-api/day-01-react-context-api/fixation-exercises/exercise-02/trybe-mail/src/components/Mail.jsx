import React from 'react'

export default function Mail() {
  const mails = [
    {
      id: 1,
      title: "Vaga de Emprego",
      status: 0
    },
    {
      id: 2,
      title: "Boleto a vencer",
      status: 0
    },
    {
      id: 3,
      title: "Newsletter Omelete",
      status: 0
    },
  ]
  return (
    <div>
      <button type="button">Marcar todos como lido</button>
      <button type="button">Marcar todos como não lido</button>
      { mails.map((mail) => (
        <div>
          <p>{ mail.title }</p>
          <button type="button">Marcar como lido</button>
          <button type="button">Marcar como não lido</button>
        </div>
      ))}
    </div>
  )
}
