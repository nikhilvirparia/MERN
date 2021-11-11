const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost/JokesAPI').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});