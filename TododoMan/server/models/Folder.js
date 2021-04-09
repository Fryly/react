const mongoose = require('mongoose')

const folderSchema = new mongoose.Schema({
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
    folder: {
        type: Array,
        require: true
    }
})

module.exports = mongoose.model('Folder', folderSchema)