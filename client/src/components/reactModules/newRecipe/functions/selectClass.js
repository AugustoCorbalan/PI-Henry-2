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

    if(id=="ErrorTitle") return(error.title=="" ? styles.errorMessageNone : styles.errorMessage);
    if(id=="ErrorImage") return(error.image=="" ? styles.errorMessageNone : styles.errorMessage);
    if(id=="ErrorHealthScore") return(error.healthScore=="" ? styles.errorMessageNone : styles.errorMessage);
    if(id=="ErrorResume") return(error.resume=="" ? styles.errorMessageNone : styles.errorMessage);
    if(id=="ErrorStep") return(error.step.step=="" ? styles.errorMessageNone : styles.errorMessage)
    if(id=="ErrorIngredients") return(error.step.ingredients=="" ? styles.errorMessageNone : styles.errorMessage);
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
        const {title, image, healthScore, resume} = error;
        if(title=="" && image=="" && healthScore=="" && resume==""){ 
            return true
        };
        return false;
    }
    const checkDataForm=(form)=>{
        const {title, image, healthScore, resume, diets, steps}= form
        if(title!="" && image!="" && healthScore!="" && resume!="" && diets.length!=0 && steps.steps.length!=0){
            return true
            };
        return false;
    }
    return (checkDataError(error)&&checkDataForm(form))? true : false;
}
