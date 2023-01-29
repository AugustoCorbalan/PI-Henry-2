require('dotenv').config();
const axios = require ('axios');
const { API_KEY } = process.env;
const { Recipe, Diet } = require('../../db.js'); 


const getRecipes= async (name)=>{
    const apiInfo= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
    let list = apiInfo.data.results;
    list = list.map((el)=>{
        return{
            id: el.id,
            title: el.title,
            image: el.image,
            diets: el.diets,
            healthScore: el.healthScore
        }
    });
    let dbInfo = await Recipe.findAll({
        include:{
            model: Diet,
            attributes: ["name"],
            through:{
                attributes:[]
            }
        }    
    });

    if(dbInfo){
        dbInfo = dbInfo.map((recipe)=>{
            const diets= recipe.dataValues.diets.map((diet)=>diet.name);
            return{
                id: recipe.dataValues.id,
                title: recipe.dataValues.title,
                image: recipe.dataValues.image,
                healthScore: recipe.dataValues.healthScore,
                diets: diets
            } 
        })
        list= list.concat(dbInfo);
    };

   if(name){
        list = list.filter((el)=>el.title.toLowerCase().includes(name.toLowerCase()));
    }
   
    return list;
};

const getRecipesById= async(id)=>{
    if (!isNaN(id)){
        const apiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`);
        const list = apiInfo.data.results; 
        const result = list.find((recipe)=>recipe.id == parseInt(id));
        return {
                id: result.id,
                title: result.title,
                image: result.image,
                diets: result.diets,
                dishTypes: result.dishTypes,
                healthScore: result.healthScore,
                summary: result.summary,
                steps: result.analyzedInstructions[0],
            }
    }
    else{
        const dbRecipes= await Recipe.findAll({
            include:{
                model: Diet,
                attributes: ["name"],
            }    
        });
        const dbInfo = await Recipe.findByPk(id, {
            include:{
                model: Diet,
                attributes: ["name"],
            }
        });
        const diets= dbInfo.dataValues.diets.map((diet)=>diet.name);
        return{
                id: dbInfo.dataValues.id,
                title: dbInfo.dataValues.title,
                image: dbInfo.dataValues.image,
                diets: diets,
                healthScore: dbInfo.dataValues.healthScore,
                summary: dbInfo.dataValues.resume,
                steps: dbInfo.dataValues.steps,
            }
    }
}

module.exports= {getRecipes, getRecipesById};