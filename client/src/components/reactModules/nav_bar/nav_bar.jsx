import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../../cssModules/nav_bar.module.css'

export class Nav_bar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div className={styles.container}>
                    <NavLink to='/Home' className={styles.navLink}>Home</NavLink>
                </div>
            </>
                
        )
    }
    
}