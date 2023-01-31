import React from "react";
import { useSelector } from 'react-redux';
import { CardsOrder } from './cardsOrder.jsx'


export const CardsFilter=(props)=>{
    let  listRecipes = props.recipes;
    const arrayFilterDiets = useSelector((state)=>state.filterByDiets);
    
    if(arrayFilterDiets.length){
        for(let i=0; i<arrayFilterDiets.length; i++){
            const dietsName= arrayFilterDiets[i].toLowerCase();
            listRecipes= listRecipes.filter((el)=>{
                for( let diet of el.diets){
                    if(diet.includes(dietsName)) return true;
                }
                return false
            })
        }  
    }


    return(
        <>
            <CardsOrder props={ listRecipes }/>
        </>
    )
}