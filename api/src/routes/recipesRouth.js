const { Router } = require('express');
const {getRecipes, getRecipesById} = require('./controllers/getRecipes');
const createRecipe = require('./controllers/createRecipe');
const router= Router();

router.get('/', async(req, res)=>{
    const { name } = req.query
    try {
        const result= await getRecipes(name);
        if(result.length>0){
            return res.status(200).json(result);
        }
        else{
            return res.status(200).send("No se encontraron coincidencias")
        }
    } catch (error) {
        return res.status(401).send(error.message)
    }
})

router.get('/:id', async(req, res)=>{
    const { id }= req.params;
    if(id){
        try {
            const result = await getRecipesById(id);
            if(result){
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

router.post('/', async (req, res)=>{
   const data= req.body;

        if(data){
            try {
                await createRecipe(data);
                res.status(200).send("Receta creada con exito");    
            } catch (error) {
                res.status(400).send(error.message)
            }    
        }
        else{
            res.status(400).send("No se proporcionaron los datos necesarios")
        }
})

module.exports= router;