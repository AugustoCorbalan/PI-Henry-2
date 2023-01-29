import React from "react";
import { useState } from "react";
import { Card } from './card.jsx'
import styles from '../cssModules/cardsPaginated.module.css';


export const CardsPaginated=( {props} )=>{
    const recipes= props;
    const [limit, setLimit] = useState(0);
    
    const handlerClickAnterior= ()=>{
        if(limit-9 >= 0){
            setLimit(limit - 9);
        }
    };
    
    const handlerClickSiguiente= ()=>{
        if( recipes.length > limit+9 ){
            setLimit(limit + 9);
        }
    };

    const list = recipes.slice(limit, limit+9);

    return(
        <>  
        <div className={styles.container}>
            <div className={styles.container1}>
                {list.map((el)=><Card props={el}/>)}
            </div>
        
            <div className={styles.container2}>
                <button onClick={()=>handlerClickAnterior()}>Anterior</button>
                <button onClick={()=>handlerClickSiguiente()}>Siguiente</button>
            </div>
        </div>
            
        </>
    )
}