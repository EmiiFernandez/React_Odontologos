/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import styles from '../card/Card.module.css'
import { AppContext } from '../../contexts/AppContext'
import { Link } from 'react-router-dom'
import image from '../../assets/doctor.jpg'

const Card = ({ dentista }) => {
  const { addFav, removeFav, favs } = useContext(AppContext)

  const { id, name, username } = dentista
  const isFavorito = favs.some((fav) => fav.id === id)

  const handleAddFav = (e) => {
    e.preventDefault()
    if (isFavorito) {
      removeFav(id)
    } else {
      addFav(id)
    }
  }

  return (
      <div className={styles.allcards}>
        <Link className={styles.link} to={`/detail/${id}`}>
          <div className={isFavorito ? styles.fav : styles.card}>
            <img src={image} width='40%' style={{ borderRadius: '50%' }} alt='doctor' />
            <h1 className={styles.name}>
              {name}
            </h1>
            <p className={styles.username}>{username}</p>
          </div>
        </Link>
        <button onClick={handleAddFav} className={isFavorito ? styles.deleteButton : styles.favButton}>
          {isFavorito ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
        </button>
      </div>
        )
}

export default Card
