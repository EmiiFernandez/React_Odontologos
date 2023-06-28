import React, { useState } from 'react'
import Form from '../components/form/Form';

const Contact = () => {
  const [usuario, setUsuario] = useState('')


  function handleForm(nombre, apellido, email) {
    const usuario = {
      nombre: nombre,
      apellido: apellido,
      email: email
    }
    setUsuario(usuario);
  }

  console.log('Datos del formulario:', usuario);


  return (
    <div>
      <Form onForm={handleForm}/>
    </div>
  )
}

export default Contact