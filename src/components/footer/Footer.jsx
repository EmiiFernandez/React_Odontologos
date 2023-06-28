import React, { useContext } from 'react'
import styles from './../footer/Footer.module.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import image from '../../assets/DH.png'

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const stylesTheme = {
    backgroundColor: theme === 'light' ? '#D8D9D9' : '#434243',
    color: theme === 'light' ? '#434243' : '#D8D9D9',
  };


  return (
    <footer className={styles.footer} style={stylesTheme}>
        <img src={image} width="40%" alt="DH" />
        <h6>Emilia Fernández - 2023</h6>
    </footer>
  )
}

export default Footer