import React, { useState } from 'react';
import api from '../../services/api';

import './index.css';

export default function Comments() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const insertContact = () => {
    api
      .post("/contato/novo", {
        name,
        email,
        phone,
      })
      .then((response) => {
        setName("");
        setEmail("");
        setPhone("");
      })
      .catch((err) => {
        console.error("Error:" + err);
      });
  };

  return (
    <React.Fragment>
      <div className="comments-container">
        <div className="comment-new">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="WhatsApp"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />

          <div className="button-content">
            <button onClick={insertContact}>Enviar</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
