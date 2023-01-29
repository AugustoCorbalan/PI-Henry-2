import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesById, cleanDetail } from "../../../Redux/actions.js"

import style from "../../cssModules/details.module.css";

export const Detail=(props)=>{
    const { id } = useParams();

    const dispatch = useDispatch();
    const details = useSelector((state)=>state.details);

    useEffect(()=>{
        dispatch(getRecipesById(id))
        return(
            dispatch(cleanDetail())
        )
        },[])
    console.log(details)
    if(Object.entries(details).length==0) return <></>;
    return(
        <>
            <div className={style.container}>
                <div className={style.subContainer}> 
                    <h1>{details.title}</h1>
                    <div className={style.subContainer1}>
                        <img src={details.image} alt="Imagen ilustrativa"/>
                        <div className={style.subContainer2}>
                            <div className={style.subContainer3}>
                                <h3>Salubridad:</h3>
                                <span>{details.healthScore}</span>
                            </div>
                            <div className={style.subContainer3}>
                                <div>
                                    <h3>Tipos de platos:</h3>
                                    <ul>
                                        {details.dishTypes? details.dishTypes.map((el)=><li>{el}</li>) : <li></li>}
                                    </ul>
                                </div>
                                <div>
                                <h3>Tipos de dietas:</h3>
                                <ul>
                                    {details.diets? details.diets.map((el)=><li>{el}</li>) : <li></li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={style.subContainer4}>
                        <h3>Descripción: </h3>
                        <span>{details.summary}</span>
                    </div>
                    <div className={style.subContainer5}>
                        <div>
                            <h3>Preparación</h3>
                        </div>
                        {details.steps? details.steps.steps.map((el)=>{
                            return(
                                <div className={style.containerPasos}>
                                    <div className={style.containerTitle}>
                                        <h4>{`Paso n° ${el.number}`}</h4>
                                    </div>
                                    <div className={style.containerText}>
                                        <span>{el.step}</span>
                                    </div>
                                    <div className={style.containerIngredientes}>
                                        <h4>Ingredeintes necesarios:</h4>
                                        <ul>{el.ingredients.map((ingr)=><li>{ingr.name}</li> )}</ul>
                                    </div>
                                </div>
                            )
                        }) : "" }
                    
                    </div>
                </div>
            </div>
        </>
    )
    
}