const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validation');


router.post('/register', async (req, res) => {

    const { error } = registerValidation(req.body)
    if ( error ) return res.status(400).json({
        message: error.details[0].message
    })

    const nameExist = await User.findOne({
        name: req.body.name,
    })
    if( nameExist ) return res.status(400).json({
        message: 'name already exist'
    })

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User ({
        name: req.body.name,
        password: hashedPassword,
        folders: []
    });

    try {
        const savedUser = await user.save();
        res.send(res.json(savedUser))
    } catch(err) {
        res.status(400).json(err);
    }

})

router.post('/login', async (req, res) => {

    const { error } = loginValidation(req.body)
    if (error) return res.status(400).json({
        message: error.details[0].message
    })

    const user = await User.findOne({
        name: req.body.name,
    })
    if(!user) return res.status(400).json({
        message: 'Name is not found'
    })
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).json({
        message: 'Invalid password'
    })

    const token = jwt.sign({ _id: user.id, name: user.name }, process.env.TOKEN_SECRET)
    res.json({token})
})

router.get('/:id', async (req, res) => {
    try{
        const user = await User.findOne({
            _id: req.params.id
        });
        res.json(user)
    }catch(err){
        res.json({message: err})
    }
});

router.patch('/changetitle/:id', async (req, res) => {
    try{
        const changetitle = await User.updateOne({
            _id: req.params.id,
            "folders.id": req.body.ids
        },{
            $set: {
                "folders.$.name": req.body.name
            }
        });
        res.json(changetitle)
    }catch(err){
        res.json({message: err})
    }
});

router.put('/addfolder/:id', async (req, res) => {
    let folder = {
        colorName: req.body.colorName,
        id: req.body.id,
        name: req.body.name,
        tasks: req.body.tasks
    }
    try{
        const addfolder = await User.updateOne({
            _id: req.params.id
        },{
            $push: {
                folders: folder
            }
        });
        res.json(addfolder)
    }catch(err){
        res.json({message: err})
    }
});

router.put('/addtask/:id', async (req, res) => {
    let task = {
        text: req.body.obj.text,
        completed: req.body.obj.completed,
        description: req.body.obj.description,
        deadline: req.body.obj.deadline
    }
    try{
        const addtask = await User.updateOne({
            _id: req.params.id,
            "folders.id": req.body.ids
        },{
            $push: {
                "folders.$.tasks": task
            }
        });
        res.json(addtask)
    }catch(err){
        res.json({message: err})
    }
});

router.put('/edittask/:id', async (req, res) => {
    try{
        const edittask = await User.findOne({
            _id: req.params.id,
        },(err, user) => {
            const f = user.folders.find((i) => i.id === req.body.ids)
            f.tasks[req.body.index] = req.body.obj
            user.save()
        })
        res.json(edittask)
    }catch(err){
        res.json({message: err})
    }
});

router.put('/deletefolder/:id', async (req, res) => {
    let folder = req.body
    try{
        const deletefolder = await User.updateOne({
            _id: req.params.id,
        },{
            $set: {
                folders: folder
            }
        }
        );
        res.json(deletefolder)
    }catch(err){
        res.json({message: err})
    }
});

router.put('/deletetask/:id', async (req, res) => {
    try{
        const deletetask = await User.updateOne({
            _id: req.params.id,
        },{
            $set: {
                folders: req.body.newTask
            }
        }
        );
        res.json(deletetask)
    }catch(err){
        res.json({message: err})
    }
});

// router.put('/complite/:id', async (req, res) => {
//     let task = req.body.newTaskFilter[0]
//     try{
//         const complite = await User.updateOne({
//             _id: req.params.id,
//             "folders.id": req.body.ids
//         },{
//             $set: {
//                 "folders.$.tasks": task
//             }
//         }
//         );
//         res.json(complite)
//     }catch(err){
//         res.json({message: err})
//     }
// });


module.exports = router