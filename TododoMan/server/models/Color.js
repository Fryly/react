const mongoose = require('mongoose');


const ColorSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    hex: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Colors', ColorSchema);