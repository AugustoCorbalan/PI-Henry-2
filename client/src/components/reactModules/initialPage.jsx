import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../cssModules/initialPage.module.css';


export const InitialPage=(props)=>{
    return(
        <>
            <div className={styles.container}>
                <div className={styles.containerButton}>
                    <NavLink to='/home' className={styles.button}> Home </NavLink>
                </div>
            </div>
        </>
    )
}