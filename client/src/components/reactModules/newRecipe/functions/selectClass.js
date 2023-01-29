import styles from "../../../cssModules/newRecipe.module.css";

export const selectClass=(id, error, form)=>{
    if(id=="inputName") return( error.title == "" ? styles.inputOk : styles.inputError );
    if(id=="inputImg") return( error.image == "" ? styles.inputOk : styles.inputError );
    if(id=="inputSalub") return( error.healthScore == "" ? styles.inputOk : styles.inputError );
    if(id=="inputResumen") return( error.resume == "" ? styles.resumenOk : styles.resumenError );
    if(id=="inputStep") return( error.step.step == "" ? styles.instruccionOk : styles.instruccionError );
    if(id=="inputIngredients") return( error.step.ingredients == "" ? styles.ingredientsOk : styles.ingredientsError );
    if(id=="pasoSig") return(
        checkStep(error, form)? styles.stepOk : styles.stepError
    )
    if(id=="submit") return(
        checkData(error, form) ? styles.submitOk : styles.submitError
    );
}


function checkStep(error, form){
    const checkError = (error)=>{
        const {step, ingredients}= error.step;
        return (step=="" && ingredients=="") ?  true : false;
    }
    const checkForm =(form)=>{
        const {step}= form.step;
        return (step!=="") ?  true : false;
    }
    return (checkError(error) && checkForm(form)) ? true : false ;
}


function checkData(error, form){
    const checkDataError=(error)=>{
        const {title, image, healtScore, resume} = error;
        if(title=="",image=="",healtScore=="",resume=="") return true;
        return false;
    }
    const checkDataForm=(form)=>{
        const {title, image, healtScore, resume, diets, steps}= form
        if(title!="",image!="",healtScore!="",resume!="", diets.length!=0, steps.length!=0) return true;
        return false;
    }
    return (checkDataError(error)&&checkDataForm(form))? true : false
}
