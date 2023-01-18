const { Router } = require('express');
const {getRecipes, getRecipesById} = require('./controllers/getRecipes');
const createRecipe = require('./controllers/createRecipe');
const router= Router();

router.get('/', async(req, res)=>{
    const { name } = req.query
    if(name){
        try {
            const result= await getRecipes(name);
            if(!!result.length){
                return res.status(200).json(result);
            }
            else{
                return res.status(200).send('No se encontraron coincidencias con el nombre ingresado');
            }
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }
    else{
        res.status(400).send('Error in query URL'); 
    }
})

router.get('/:id', async(req, res)=>{
    const { id }= req.params;
    if(id){
        try {
            const result = await getRecipesById(id);
            if(!!result.length){
                return res.status(200).json(result);
            }
            else{
                return res.status(200).send('No se encontraron coincidencias con id')
            }
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }
})

router.post('/', (req, res)=>{
   const data= req.body;
   try {
        if(data){
            createRecipe(data);
            res.status(200).send("Receta creada con exito");
        }
        else{
            res.status(400).send("No se proporcionaron los datos necesarios")
        }
    
   } catch (error) {
        res.status(400).send(error.message)
   }
})

module.exports= router;