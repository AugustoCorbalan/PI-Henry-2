import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlers } from "./functions/handlers.js";
import { selectClass } from "./functions/selectClass.js";
import { postRecipe, getDiets, cleanResultPost} from "../../../Redux/actions";
import styles from "../../cssModules/newRecipe.module.css";

export const NewRecipe= (props)=>{
    const dispatch= useDispatch();
    const diets = useSelector((state)=>state.diets);
    const postResult = useSelector((state)=>state.postResult);
    useEffect(()=>{
        dispatch(getDiets());
        return(
            dispatch(cleanResultPost())
        )
    },[])

    const [ form, setForm ] = useState({
        title:"",
        image:"",
        resume:"",
        healthScore: "",
        tiempo: "",
        diets:[],
        step: {step: "", ingredients:""},
        steps: {steps:[]}
    });
    const [error, setError] = useState({
        title:"",
        image:"",
        healthScore: "",
        resume:"",
        step: {step: "", ingredients:""},
    });

    const handlerOnchange=(id, value)=> handlers(id, value, form, setForm, error, setError)
    
    const submitHandler=(evento)=>{
        evento.preventDefault();
        dispatch(postRecipe(form));
    };
    return(
        postResult.length ? <div className={styles.message}><span key="postResult">{postResult}</span></div> :

        <div className={styles.container}>
            <div className={styles.subContainer}>
                <h1>Ingrese los datos de la receta: </h1>
                <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.subContainer1}>
                        <div className={styles.subContainerIzq}>
                            <div className={styles.subContainerIzq1}>
                                <div>
                                    <div className={styles.input}>
                                        <label>Nombre: </label>
                                        <input key="inputName" id="inputName" type="text" className={selectClass("inputName", error)} onChange={({target})=>handlerOnchange(target.id, target.value)} value={form.title}/>
                                    </div>
                                    <div className={styles.input}>
                                        <label>Imagen: </label>
                                        <input key="inputImg" id="inputImg" type="text" className={selectClass("inputImg", error)} onChange={({target})=>handlerOnchange(target.id, target.value)} value={form.image}/>
                                    </div>
                                    <div className={styles.input}>
                                        <label>Salubridad: </label>
                                        <input key="inputSalubridad" id="inputSalubridad" type="text" className={selectClass("inputSalub", error)} onChange={({target})=>handlerOnchange(target.id, target.value)} value={form.healthScore}></input>
                                    </div>
                                    <div className={styles.resumen}>
                                        <label>Resumen del plato: </label>
                                        <textarea key="inputResumen" id="inputResumen" type="text" className={selectClass("inputResumen", error)} onChange={({target})=>handlerOnchange(target.id, target.value)} value={form.resume}/>
                                    </div>
                                </div>   
                            </div>

                            <div className={styles.subContainerIzq2}>
                                <h2>Paso a paso: </h2>
                                
                                <div className={styles.instruccion}>
                                    <label>Instrucción </label>
                                    <textarea key="inputStep" id="inputStep" type="text" className={selectClass("inputStep", error)} onChange={({target})=>handlerOnchange(target.id, target.value)} value= {form.step.step}/>
                                </div>
                                <div className={styles.ingredients}>
                                    <label>Ingredeintes: </label>
                                    <textarea key="inputIngredients" id="inputIngredients" type="text" placeholder="Ingred.1, Ingred.2,..." className={selectClass("inputIngredients", error)} onChange={({target})=>handlerOnchange(target.id, target.value)} value={form.step.ingredients} />
                                </div>
                                <button id="pasoSig" type="button" className={selectClass("pasoSig",error,form)}onClick={({target})=>handlerOnchange(target.id)}> Paso siguiente</button>
                            </div>
                        </div>
                        <div className={styles.subContainerDer}>
                                <h2>Elija las dietas que corresponde: </h2>
                            <div className={styles.containerCheckbox}>

                                <div className={styles.subContainerCheckbox}>
                                    {diets.map((el)=>{
                                        return(
                                            <div className={styles.checkbox}>
                                                <input type="checkbox" id="diet"onClick={({target})=>handlerOnchange(target.id, el.name)}/>
                                                <label>{el.name}</label>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={styles.errores}>
                                    <span id="ErrorTitle" className={selectClass("ErrorTitle", error)}>{`Nombre: ${error.title}`}</span>
                                    <span id="ErrorImage" className={selectClass("ErrorImage", error)}>{`Imagen: ${error.image}`}</span>
                                    <span id="ErrorHealthScore" className={selectClass("ErrorHealthScore", error)}>{`Salub.: ${error.healthScore}`}</span>
                                    <span id="ErrorResume" className={selectClass("ErrorResume", error)}>{`Resumen: ${error.resume}`}</span>
                                    <span id="ErrorStep" className={selectClass("ErrorStep", error)}>{`Instrucciones: ${error.step.step}`}</span>
                                    <span id="ErrorIngredients" className={selectClass("ErrorIngredients", error)}>{`Ingredientes: ${error.step.ingredients}`}</span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <button id="submit" type="submit" className={selectClass("submit", error, form)}> Crear Receta </button>
                </form>
            </div>
        </div>
    )
}