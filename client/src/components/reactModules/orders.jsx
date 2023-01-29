import React from "react";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { orderByAlfabetic, orderBySalub } from '../../Redux/actions';
import { useDispatch } from "react-redux";
import styles from '../cssModules/orders.module.css';

export const Orders=(props)=>{
    const dispatch = useDispatch();
    const [statusButton, setStatus] = useState(
            {
                alfAsc: false,
                alfDesc: false,
                salubAsc: false,
                salubDesc:false
            }
        );

    const handlerClick=(name)=>{
        if(name=="alfAsc"){
            statusButton.alfAsc? dispatch(orderByAlfabetic("")) : dispatch(orderByAlfabetic(name));
            statusButton.alfAsc? setStatus({...statusButton, alfAsc: false}) :
                setStatus({...statusButton, alfAsc: true, alfDesc: false})
                
        }
        else if(name=="alfDesc"){
            statusButton.alfDesc? dispatch(orderByAlfabetic("")) : dispatch(orderByAlfabetic(name));
            statusButton.alfDesc? setStatus({...statusButton, alfDesc: false}) :
                setStatus({...statusButton, alfDesc: true, alfAsc: false})
        }
        else if(name=="salubAsc"){
            statusButton.salubAsc? dispatch(orderBySalub("")) : dispatch(orderBySalub(name));
            statusButton.salubAsc? setStatus({...statusButton, salubAsc: false}) :
                setStatus({...statusButton, salubAsc: true, salubDesc: false})
        }
        else if(name=="salubDesc"){
            statusButton.salubDesc? dispatch(orderBySalub("")) : dispatch(orderBySalub(name));
            statusButton.salubDesc? setStatus({...statusButton, salubDesc: false}) :
                setStatus({...statusButton, salubDesc: true, salubAsc: false})
        }
    }
    const classButton=(name)=>{
        if(name=="alfAsc"){
            return !statusButton.alfAsc? styles.styleButtonOff : styles.styleButtonOn ;
        }
        else if(name=="alfDesc"){
            return !statusButton.alfDesc? styles.styleButtonOff : styles.styleButtonOn ;
        }
        else if(name=="salubAsc"){
            return !statusButton.salubAsc? styles.styleButtonOff : styles.styleButtonOn ;
        }
        else if(name=="salubDesc"){
            return !statusButton.salubDesc? styles.styleButtonOff : styles.styleButtonOn ;
        }
    }
    return(
        <>
            <div className={styles.container}>
                <h2>Ordenar:</h2>
                <h3>Alfabetiamente</h3>
                <div className={styles.subContainer}>
                    <button onClick={()=>handlerClick('alfAsc')} className={classButton("alfAsc")}>↑</button>
                    <button onClick={()=>handlerClick("alfDesc")} className={classButton("alfDesc")}>↓</button>
                </div>
                <h3>Salubridad</h3>
                <div className={styles.subContainer}>
                    <button onClick={()=>handlerClick("salubAsc")} className={classButton("salubAsc")}>↑</button>
                    <button onClick={()=>handlerClick("salubDesc")} className={classButton("salubDesc")}>↓</button>
                </div>
            </div>
            
        </>
    )
}