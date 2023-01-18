const axios = require('axios');
const { Diet } = require('../../db.js')


const getDiets= async ()=>{
    const dbInfo= await Diet.findAll();
    if(dbInfo.length){
        return dbInfo
    }
    else{
        
        const typesDiets=[
            {name: "Gluten Free"}, {name: "Ketogenic"}, {name: "Vegetarian"}, {name: "Lacto-Vegetarian"}, {name: "Ovo-Vegetarian"}, {name: "Vegan"},{name: "Pescetarian"}, {name: "Paleo"}, {name: "Primal"}, {name: "Low FODMAP"}, {name: "Whole30"}
        ];

        const diets= await Diet.bulkCreate(typesDiets);
        return diets;

    }
}

module.exports = getDiets