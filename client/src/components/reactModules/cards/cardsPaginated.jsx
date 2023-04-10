import React from "react";
import { useState } from "react";
import { Card } from './card.jsx'
import styles from '../../cssModules/cardsPaginated.module.css';


export const CardsPaginated=( {props} )=>{
    const recipes = props;
    const [limit, setLimit] = useState(0);
    const arrayPages = (()=>{
        const cantPages = Math.ceil(recipes.length/9);
        const array=[];
        for(let i=1; i<=cantPages; i++){
            array.push(i)
        }
        return array;
    })()
    
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

    const handlerClickNumberPage= (numberPage)=>{
        setLimit(9*(numberPage-1))
    }

    const list = recipes.slice(limit, limit+9);
    
    return( list.length?
        <>  
        <div className={styles.container}>
            <div className={styles.container1}>
                {list.map((el)=><Card props={el}/>)}
            </div>
        
            <div className={styles.container2}>
                <div className={styles.buttonsPages}>
                    { arrayPages.map((el)=>{
                        return  <button onClick={()=>handlerClickNumberPage(el)}>
                                    {el}
                                </button>
                        })
                    }
                </div>
                <button onClick={()=>handlerClickAnterior()}>Anterior</button>
                <button onClick={()=>handlerClickSiguiente()}>Siguiente</button>
            </div>
        </div>
            
        </>
        : <> <span> No se encontraron coincidencias con filtros</span></>
    )
}