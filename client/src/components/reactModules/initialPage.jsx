import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../cssModules/initialPage.module.css';


export const InitialPage=(props)=>{
    return(
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>PI-FOOD </h1>
                    <h2>by Corbalan Augusto N.</h2>
                </div>
                <div className={styles.containerButton}>
                    <NavLink to='/home' className={styles.button}> Ingresar </NavLink>
                </div>
            </div>
        </>
    )
}