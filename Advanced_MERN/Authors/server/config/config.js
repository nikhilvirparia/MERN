const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/Authorsdb', {   
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });