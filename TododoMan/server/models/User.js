const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 6
    },
    password: {
        type: String,
        require: true,
        max: 1024,
        min: 6
    },
    folders: [
        {
            _id : false, 
            id: {
                type: Number,
                require: true
            },
            name: {
                type: String,
                require: true,
            },
            colorName: {
                type: String,
                require: true,
            },
            tasks: [
                {
                    _id : false, 
                    text: {
                        type: String,
                        require: true,
                    },
                    completed: {
                        type: Boolean,
                        require: true,
                    }
                }
            ]
        }
    ]   
})

module.exports = mongoose.model('User', userSchema)
