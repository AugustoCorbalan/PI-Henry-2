import React from 'react';
import { useSelector } from 'react-redux';
import { CardsPaginated } from './cardsPaginated.jsx'


export const CardsOrder=({ props })=>{
    let recipes = props;
    const orderAlfabetic = useSelector((state)=>state.orderAlfabetic);
    const orderSalub = useSelector((state)=>state.orderSalub);
    
    recipes = orderByAlfabetic(recipes, orderAlfabetic);
    recipes = orderBySalub(recipes, orderSalub);
    
    return(
        <>
            <CardsPaginated props={ recipes }/>
        </>
    )
}


function orderByAlfabetic(recipes, orden){
    if(orden === "alfAsc"){
        recipes = recipes.sort((a, b)=>{
            if(a.title < b.title) return -1;
            if(a.title>b.title) return 1;
            return 0
        })
    }

    if(orden === "alfDesc"){
        recipes = recipes.sort((a, b)=>{
            if(a.title > b.title) return -1;
            if(a.title<b.title) return 1;
            return 0
        })
    }

    return recipes;
}


function orderBySalub(recipes, orden){
    if(orden === "salubAsc"){
        recipes = recipes.sort((a, b)=>{
            if(a.healthScore < b.healthScore) return -1;
            if(a.healthScore>b.healthScore) return 1;
            return 0
        })
    }

    if(orden === "salubDesc"){
        recipes = recipes.sort((a, b)=>{
            if(a.healthScore > b.healthScore) return -1;
            if(a.healthScore<b.healthScore) return 1;
            return 0
        })
    }
    return recipes;
}