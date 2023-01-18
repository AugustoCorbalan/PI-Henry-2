const { Recipe, Diet } = require('../../db.js');


const createRecipe = async (data)=>{
   const newRecipe = await Recipe.create(data);

   const dietsDb= await Diet.findAll({
    where: {name: data.diets}
   }) 

   newRecipe.addDiet(dietsDb);
};


module.exports = createRecipe;