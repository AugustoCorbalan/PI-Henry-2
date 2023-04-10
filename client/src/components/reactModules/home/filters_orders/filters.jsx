import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets, filterByDiet, origenRecipe} from '../../../../Redux/actions';
import styles from '../../../cssModules/filters.module.css';


export const Filters=(props)=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDiets());
    },[])

    const diets = useSelector((state)=> state.diets);
    const arrayDietsName= useSelector((state)=> state.filterByDiets);

    const handlerClick=(dietName)=>{
        if(dietName == "all"){ 
            return dispatch(filterByDiet([]))
        }
        else if(!arrayDietsName.includes(dietName)){
            const diets = [...arrayDietsName]
            diets.push(dietName)
            return dispatch(filterByDiet(diets));
        }
        else{
            let diets = [...arrayDietsName]
            diets = diets.filter((el)=>el!=dietName)  
            return dispatch(filterByDiet(diets));
        }
    }

    const classButton=(dietName)=>{
        if(dietName== "all" && arrayDietsName.length==0){
            return styles.styleButtonOn;
        }
        else if(arrayDietsName.includes(dietName)){
            return styles.styleButtonOn;
        }
        else{
            return styles.styleButtonOff;
        }
    }

    const handlerOrigen=(data)=>{
        return dispatch(origenRecipe(data))
    }

    return(
        <>
            <div className={styles.container}>
                <h2>Elegir tipo de dieta:</h2>
                <button onClick={()=>handlerClick("all")} className={classButton('all')}>Todas</button>
                {diets.map((el)=>{
                    return(
                        <button onClick={()=>handlerClick(el.name)} className={classButton(el.name)}>{el.name}</button>
                    )
                })}
              
            </div>
            {/* <div className={styles.container}>
                <h2>Origen:</h2>
                <button onClick={()=>handlerOrigen("api")} >API</button>
                <button onClick={()=>handlerOrigen("db")} >DB</button>
                
              
            </div> */}
        </>
    )
}