import React, { useContext } from 'react'
import Card from '../components/card/Card'
import { AppContext } from '../contexts/AppContext'
import { ThemeContext } from '../contexts/ThemeContext'
import stylesCards from '../components/card/Card.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentistas } = useContext(AppContext)

  const { theme } = useContext(ThemeContext)

  // Estilos basados en el tema actual
  const styles = {
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#222',
    color: theme === 'light' ? '#333' : '#fff',
  }

  return (
    <main style={styles}>
      <h1 className={stylesCards.titulo}>Staff odontólogos</h1>
        <div className={stylesCards.container}>
          {dentistas.map((dentista) => (
            <Card key={dentista.id} dentista={dentista} />
          ))}
        </div>
    </main>
  )
}

export default Home
