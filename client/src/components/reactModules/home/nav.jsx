import React from "react";
import { useState } from "react";
import { NavLink }  from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipes } from '../../../Redux/actions';
import styles from '../../cssModules/nav.module.css';

export const Nav=(props)=>{
    const dispatch= useDispatch();
    
    const [ name, setName ] = useState("");

    const handlerClick=(name)=>{
        dispatch(getRecipes(name))
    }

    return(
        <>
            <div className={styles.container}>

               <div className={styles.subContainer1}>  
                    <NavLink to="/" className={styles.navLinkInicio}> Inicio </NavLink>         
               </div>

               <div className={styles.subContainer2}>
                    <input onChange={({target})=>  setName(target.value) } type="text" className={styles.input} />
                    <button onClick={()=>handlerClick(name)} className={styles.button}>Buscar</button>
               </div>

               <div className={styles.subContainer3}>
                    <NavLink to="/newRecipe" className={styles.navLink}> Agregar una receta </NavLink>
               </div>
               
            </div>
        </>
    )
}