/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from '../form/Form.module.css';

const Form = (props) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !nombre ||
      !apellido ||
      !email ||
      nombre.length < 5 ||
      !validateEmail(email)
    ) {
      setError('Por favor verifique su información nuevamente');
      return;
    } else {
      props.onForm(nombre, apellido, email);
      setError('');
      setFormularioEnviado(true);
      console.log('Formulario enviado');
    }
  }

  function handleNombre(e) {
    setNombre(e.target.value);
  }

  function handleApellido(e) {
    setApellido(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function validateEmail(email) {
    // Expresión regular para validar el formato de email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  return (
    <div className={styles.contact }>
      <>
        {formularioEnviado ? (
          <p>
            Gracias {nombre}, te contactaremos lo antes posible vía email.
          </p>
        ) : (
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <h2 className={styles.text}>¿Querés trabajar con nosotros?</h2>
            <label htmlFor="nombre">Nombre:</label>
            <input
              className={styles.input}
              type="text"
              id="nombre"
              placeholder='Mariano'
              value={nombre}
              onChange={handleNombre}
            />

            <label htmlFor="apellido">Apellido:</label>
            <input
              className={styles.input}
              type="text"
              id="apellido"
              placeholder='García'
              value={apellido}
              onChange={handleApellido}
            />

            <label htmlFor="email">Email:</label>
            <input
              className={styles.input}
              type="text"
              id="email"
              placeholder='mgarcia@gmail.com'
              value={email}
              onChange={handleEmail}
            />

            {error && <p>{error}</p>}

            <button className={styles.button} type="submit">
              Enviar
            </button>
          </form>
        )}
      </>
    </div>
  );
};

export default Form;
