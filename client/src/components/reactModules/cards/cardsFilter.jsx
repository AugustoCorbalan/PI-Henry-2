import React from "react";
import { useSelector } from 'react-redux';
import { CardsOrder } from './cardsOrder.jsx'


export const CardsFilter=(props)=>{
    let  listRecipes = props.recipes;
    const arrayFilterDiets = useSelector((state)=>state.filterByDiets);
    const origen = useSelector((state)=>state.origen);
    
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

    if(origen.length){
        if(origen=="api"){
            listRecipes= listRecipes.filter((el)=> Number.isInteger(el.id))
        }
        else{
            listRecipes= listRecipes.filter((el)=> !Number.isInteger(el.id))
        }
    }

    return(
        <>
            <CardsOrder props={ listRecipes }/>
        </>
    )
}