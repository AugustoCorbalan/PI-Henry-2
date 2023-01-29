import { validateName, validateResumen, validateHealthScore, validateDescripcion,validateIngredients, validateUrl } from "./validation.js";

export const handlers=(id, value, form, setForm, error, setError)=>{
    if(id=="inputName"){
        setForm({...form, title: value})
        setError({...error, title: validateName(value)})
    }
    if(id=="inputImg"){
        setForm({...form, image: value})
        setError({...error, image: validateUrl(value)})
    }
    if(id=="inputResumen"){
        setForm({...form, resume: value})
        setError({...error, resume: validateResumen(value)})
    }
    if(id=="inputSalubridad"){
        setForm({...form, healthScore: value})
        setError({...error, healthScore: validateHealthScore(value)})
    }
    if(id=="inputStep"){
        setForm({...form, step: {...form.step, step: value}});
        setError({...error, step: {...error.step, step: validateDescripcion(value)}});
    }
    if(id=="inputIngredients"){
        setForm({...form, step: {...form.step, ingredients: value}});
        setError({...error, step: {...error.step, ingredients: validateIngredients(value)}});
    }
    if(id=="diet"){
        let diets= [...form.diets, value];
        setForm({...form, diets: diets});
    }
    if(id=="pasoSig"){
        if(error.step.step=="" && error.step.ingredients==""){
            const { ingredients } = form.step;
            let arrIngredients= ingredients.split(", ");
            arrIngredients = arrIngredients.map((ingr)=>{
                return{name: ingr}
            });
        const step= {step: form.step.step, ingredients: arrIngredients, number: form.steps.steps.length+1}
        const steps= [...form.steps.steps, step]
        setForm({
            ...form, 
            steps: {steps: steps}, 
            step:{step: "", ingredients: ""}
        });
        }
    }
};
