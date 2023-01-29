import axios from 'axios';

export const GET_RECIPES = "GET_RECIPES";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const FILTER_DIET = "FILTER_DIET";
export const ORDER_ALFABETIC = "ORDER_ALFABETIC";
export const ORDER_SALUB = "ORDER_SALUB";
export const POST_RECIPE = "POST_RECIPE"; 

export const getRecipes=(name)=>{
    return async function(dispatch){
        const infoServer= await axios.get(`http://localhost:3001/recipes?name=${name || "" }`)
        const data= infoServer.data;
        dispatch({type: GET_RECIPES, payload: data})
    }
}

export const getRecipesById=(id)=>{
    return async function(dispatch){
        const infoServer= await axios.get(`http://localhost:3001/recipes/${id}`)
        const data= infoServer.data;
        dispatch({type: GET_DETAIL, payload: data})
    }
}

export const getDiets=()=>{
    return async function(dispatch){
        const infoServer= await axios.get(`http://localhost:3001/diets`);
        const data= infoServer.data;
        dispatch({type: GET_DIETS, payload: data})
    }
}

export const postRecipe=(data)=>{
    return async function(dispatch){
        await axios.post(`http://localhost:3001/recipes`, data);
    }
}

export const cleanDetail=()=>{
    return function(dispatch){
        dispatch({type: CLEAN_DETAIL, payload: {}})
    }
}

export const filterByDiet=(arrayDietsNames)=>{

    return function(dispatch){
        dispatch({type: FILTER_DIET, payload: arrayDietsNames})
    }
}

export const orderByAlfabetic=(order)=>{
    return function(dispatch){
        dispatch({type: ORDER_ALFABETIC, payload: order})
    }
}

export const orderBySalub=(order)=>{
    return function(dispatch){
        dispatch({type: ORDER_SALUB, payload: order})
    }
}