import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../../Redux/actions';
import { CardsFilter } from './cardsFilter.jsx';
import styles from '../../cssModules/cards.module.css';


export const Cards=(props)=>{
    
    const dispatch = useDispatch();
    const recipes = useSelector((state)=>state.recipes);
    useEffect(()=>{
        dispatch(getRecipes());
    },[])

    
    return(
        <>
            <div className={styles.container}>
                <CardsFilter recipes= {recipes}/>
            </div>
        </>
    )
}