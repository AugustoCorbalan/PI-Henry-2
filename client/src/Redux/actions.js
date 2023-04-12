import axios from 'axios';

export const GET_RECIPES = "GET_RECIPES";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const FILTER_DIET = "FILTER_DIET";
export const ORDER_ALFABETIC = "ORDER_ALFABETIC";
export const ORDER_SALUB = "ORDER_SALUB";
export const POST_RECIPE = "POST_RECIPE"; 
export const CLEAN_RESULTPOST = "CLEAN_RESULTPOST";
export const ORIGEN_RECIPE = "ORIGEN_RECIPE";

export const getRecipes=(name)=>{
    return async function(dispatch){
        const infoServer= await axios.get(`/recipes?name=${name || "" }`)
        const data= infoServer.data;
        dispatch({type: GET_RECIPES, payload: data})
    }
}

export const getRecipesById=(id)=>{
    return async function(dispatch){
        const infoServer= await axios.get(`/recipes/${id}`)
        const data= infoServer.data;
        dispatch({type: GET_DETAIL, payload: data})
    }
}

export const getDiets=()=>{
    return async function(dispatch){
        const infoServer= await axios.get(`/diets`);
        const data= infoServer.data;
        dispatch({type: GET_DIETS, payload: data})
    }
}

export const postRecipe=(data)=>{
    return async function(dispatch){
        const result = await axios.post(`/recipes`, data);
        const message= result.data;
        dispatch({type:POST_RECIPE, payload: message })
    }
}

export const cleanResultPost=()=>{
    return function(dispatch){
        dispatch({type: CLEAN_RESULTPOST})
    }
}

export const cleanDetail=()=>{
    return function(dispatch){
        dispatch({type: CLEAN_DETAIL, payload: {}})
    }
}

export const origenRecipe=(data)=>{
    return function(dispatch){
        dispatch({type:ORIGEN_RECIPE, payload: data})
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