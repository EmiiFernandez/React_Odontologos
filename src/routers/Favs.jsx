//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import React, { useContext } from 'react'
import Card from '../components/card/Card'
import { AppContext } from '../contexts/AppContext'
import styles from '../components/card/Card.module.css'
import idiente from '../assets/diente1.png'

const Favs = () => {
  const { favs } = useContext(AppContext)

  const uniqueFavs = favs.filter((value, index, self) => {
    return self.findIndex((item) => item.id === value.id) === index
  })

  const favoritos = uniqueFavs.map((fav) => (
    <Card key={fav.id} dentista={fav} />
  ))

  const hasFavoritos = favoritos.length > 0


  return (
    <div className={`${styles.favsrouter} ${!hasFavoritos && styles.empty} ${favoritos.length <= 3 && styles.smallHeight}` }>
      <h1 className={styles.titulo}>Favoritos</h1>
      <div className={`${styles.container} ${!hasFavoritos && styles.empty}`}>
        {favoritos.length > 0 ? favoritos : <img src={idiente} width="400px" alt='Minion' />}
      </div>
    </div>
  );
}
export default Favs
