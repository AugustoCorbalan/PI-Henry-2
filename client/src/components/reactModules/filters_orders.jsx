import React from "react";
import { Filters } from './filters.jsx';
import { Orders } from './orders.jsx';
import styles from '../cssModules/filters_orders.module.css';

export const Filters_Orders=(props)=>{
    return(
        <>
            <div className={styles.container}>
                <Filters/>
                <Orders/>
            </div>
        </>
    )
}