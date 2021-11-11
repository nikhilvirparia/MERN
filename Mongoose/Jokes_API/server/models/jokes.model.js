const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [ true, "Jokes needs the setup" ],
        minlength: [ 10, "Setup must be ten charcters"]
    },
    punchline: {
        type: String,
        required: [true, " Punchline should be required "],
        minlength: [3, "Min length should be three "]
    } 
},{timestamp:true});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
