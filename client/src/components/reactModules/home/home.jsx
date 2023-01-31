import React  from "react";

import { Nav } from './nav.jsx';
import { Cards } from '../cards/cards.jsx';
import {Filters_Orders} from './filters_orders/filters_orders.jsx';
import styles from '../../cssModules/home.module.css';

export const Home= (props)=>{

    return(
        <>
            <div className={styles.container}>
                <div className={styles.container1}>
                    <Nav/>
                </div>
                <div className={styles.container2}>
                    <Filters_Orders/>
                    <Cards/>
                </div>    
            </div>
        </>
    )

    
}