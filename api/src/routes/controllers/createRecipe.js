const { Recipe, Diet } = require('../../db.js');


const createRecipe = async (data)=>{
   const newRecipe = await Recipe.create(data);

   const {diets} = data;
   
   diets.map(async (diet)=>{
      const dietsDb= await Diet.findAll({
         where: {name: diet}
        }) 
        newRecipe.addDiet(dietsDb);
   })
   
};


module.exports = createRecipe;