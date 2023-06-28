import React, { useContext } from 'react'
import Card from '../components/card/Card'
import { AppContext } from '../contexts/AppContext'
import { ThemeContext } from '../contexts/ThemeContext'
import stylesCards from '../components/card/Card.module.css'

const Home = () => {
  const { dentistas } = useContext(AppContext)

  const { theme } = useContext(ThemeContext)

  const styles = {
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#222',
    color: theme === 'light' ? '#333' : '#fff',
  }

  return (
    <main style={styles}>
      <p>Prueba</p>
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
