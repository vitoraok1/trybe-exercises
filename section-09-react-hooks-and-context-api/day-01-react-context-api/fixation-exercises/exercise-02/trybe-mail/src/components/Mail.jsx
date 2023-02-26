import React, { useState, useEffect } from 'react';
import './Mail.css';

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
  ];

  const [mailStatus, setMailStatus] = useState(mails);

  const changeAllRead = () => {

    const allRead = mails.map((mail) => ({ ...mail, status: 1 }));

    setMailStatus(allRead);

  };

  const changeAllUnread = () => {

    const allUnread = mails.map((mail) => ({ ...mail, status: 0 }));

    setMailStatus(allUnread);

  };

  const changeMail = (id, status) => {

    const messages = mailStatus.map((mail) => {

      if (mail.id === id) {
        return { ...mail, status: status };
      }
      return mail;
    });

    setMailStatus(messages);

  }

  return (
    <div>
      <button type="button" onClick={ changeAllRead }>Marcar todos como lido</button>
      <button type="button" onClick={ changeAllUnread }>Marcar todos como não lido</button>
      { mailStatus.map((mail) => (
        <div id={ mail.id } key={ mail.id } className={ mail.status ? 'lido' : 'não-lido' }>
          <p>{ mail.title }</p>
          <button type="button" onClick={ () => changeMail(mail.id, 1) } >Marcar como lido</button>
          <button type="button" onClick={ () => changeMail(mail.id, 0) }>Marcar como não lido</button>
        </div>
      ))}
    </div>
  )
}
