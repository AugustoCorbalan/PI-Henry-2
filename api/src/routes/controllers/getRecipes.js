require('dotenv').config();
const axios = require ('axios');
const { API_KEY } = process.env;
const { Recipe, Diet } = require('../../db.js'); 


const getRecipes= async (name)=>{
    const apiInfo= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`)
    let list = apiInfo.data.results;
    let dbInfo = await Recipe.findAll({
        includes:{
            model: Diet,
            attributes: ["name"],
            trough:{
                attributes:[]
            }
        }    
    });

    if(dbInfo){
        dbInfo = dbInfo.map((el)=> el.dataValues)
        list= list.concat(dbInfo);
        console.log(list)
    };
   
    const result = list.filter((el)=>el.title.includes(name));
    return result;
};

const getRecipesById= async(id)=>{
    const apiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`);
    let list = apiInfo.data.results;
    const dbInfo = await Recipe.findAll({
        includes:{
            model: Diet,
            attributes: ["name"],
            trough:{
                attributes:[]
            }
        }
    });
    list = list.concat(dbInfo);
    console.log(list)
    const result = list.filter((el)=> parseInt(el.id) === parseInt(id))
    return result;
}

module.exports= {getRecipes, getRecipesById};