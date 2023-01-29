
export const validateName=(name)=>{

    if(name.length<2) return "Nombre demasiado corto";
    if(name.length>100) return "Nombre demasiado largo";
    
    const validarName= /^[a-zA-Z ]*$/ ;
    if(!validarName.test(name)){
        return "Solo se admiten letras y espacios";
    }
    return "";
}

export const validateUrl=(value)=>{
    const validarUrl = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/ ;
    const validarImg = /.*(png|jpg|jpeg|gif)$/ ;

        if(!validarUrl.test(value)) return "Por favor insertar un URL válido";
        if(!validarImg.test(value)) return "La URL no corresponde a una imagen";
        return "";
}

export const validateResumen=(text)=>{

    if(text.length<50) return "Resumen demasiado corto";
    if(text.length>1500) return "Resumen demasiado largo";
    return "";
}
export const validateHealthScore=(value)=>{
    const validarNumero=/^[0-9]*$/
    if(!validarNumero.test(value)) return "No es un numero";
    if(parseInt(value)<0 || parseInt(value)>100) return "Ingresar un valor entre 0 y 100"; 
    return "";
}

export const validateDescripcion=(text)=>{
    if(text.length<10) return "Descripción demasiado corta";
    if(text.length>200) return "Descripción demasiado larga";
    return "";
}

export const validateIngredients=(string)=>{
    const validar= /^[a-zA-Z0-9 ]*$/
    for(let i=0; i<string.length; i++){
        if(string[i]==","){
        if(string[i+1]!==" ") return "Colocar espacio luego de la coma" 
        }
    }
    const arrayIngredientes = string.split(", ");
    const i = arrayIngredientes.length-1;
    if(!validar.test(arrayIngredientes[i])) return "No es un ingrediente valido" ;
    if(arrayIngredientes[i].length>20) return "Separar ingredientes con: , " ;
    if(i>50) return "Demasiados ingredientes para un paso" ;
    return "";
}