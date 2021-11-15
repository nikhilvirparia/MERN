const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "name is required!"],
        minlength: [4, "Name must be at least 4 characters"]
    }
}, { timestamps: true });

module.exports.Author = mongoose.model("Author", AuthorsSchema);