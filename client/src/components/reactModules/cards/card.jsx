import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../../cssModules/card.module.css';


export const Card=({ props })=>{

    return(
        <>
            <NavLink to={`detail/${props.id}`} className={styles.navLink}>
                <div className={styles.container}>
                    <h1>{props.title}</h1>
                    <div className={styles.subContainer}>
                        
                        <img src={props.image}/>
                        <div>
                            <h3>Tipos de dietas: </h3>
                            <ul>{
                                props.diets.map((diet)=>{
                                    return(
                                        <li>{diet}</li>
                                    )
                                })
                                }</ul>
                        </div>
                        
                    </div>
                </div>
            </NavLink>
            
        </>
    )
}