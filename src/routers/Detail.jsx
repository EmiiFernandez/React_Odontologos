import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from '../components/card/Card.module.css'
import { ThemeContext } from '../contexts/ThemeContext';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentista, setDentista] = useState(null);

  async function fetchDentista() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const dentistaData = await response.json();
    setDentista(dentistaData);
  }

  useEffect(() => {
    fetchDentista();
  }, [id]);

  if (!dentista) {
    return <div>Loading...</div>;
  }

  const { theme } = useContext(ThemeContext);

  const stylesTheme = {
    backgroundColor: theme === 'light' ? '#D8D9D9' : '#434243',
    color: theme === 'light' ? '#434243' : '#D8D9D9',
  };


  const { name, email, phone, website } = dentista;

  return (
    <div className={styles.detalles} >
      <div className={styles.cdetalles} style={stylesTheme}>
      <h1 className={styles.dtitulo}>{name}</h1>
      <p className={styles.ddatos}>Email: {email}</p>
      <p className={styles.ddatos}>Teléfono: {phone}</p>
      <div  className={styles.dweb}>
      <p>Website:</p> <Link className={styles.link} style={stylesTheme}s> www.{website}</Link>
      </div>
      </div>
    </div>
  );
};
export default Detail