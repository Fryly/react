const express = require('express');
const router = express.Router();
const Color = require('../models/Color')

router.get('/' , async (req, res) => {
    try{
        const colors = await Color.find();
        res.json(colors)
    } catch(err) {
        res.json({
            message: err
        })
    }
})

module.exports = router