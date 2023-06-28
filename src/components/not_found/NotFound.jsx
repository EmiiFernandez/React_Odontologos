import React from 'react'
import ierror from '../../assets/pagenotfound.png'
import styles from '../not_found/NotFound.module.css'

const NotFound= () => { 
    return (
        <div className={styles.container}>
            <img className={styles.image} src={ierror} alt="Error 404" />
        </div>
    )
}

export default NotFound