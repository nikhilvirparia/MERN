const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/Productdb', {   
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });