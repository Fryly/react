const express = require('express');
const router = express.Router();
const verify = require('./verifyToken')
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

// router.post('/',verify, async (req, res) => {
//     const post = new Post ({
//         title: req.body.title,
//         description: req.body.description
//     });
//     try{
//         const savedPost = await post.save();
//         res.json(savedPost)
//     } catch(err) {
//         res.json({
//             message: err
//         })
//     }
// })

module.exports = router