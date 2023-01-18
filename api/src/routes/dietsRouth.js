const { Router } = require('express');
const getDiets = require('./controllers/getDiets')
const router= Router();

router.get('/', async(req, res)=>{
    try {
        const result = await getDiets();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;