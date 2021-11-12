const express = require("express");
const cors = require('cors');
const app = express();


app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

require("./server/config/mongoose.config");

require('./server/routes/products.routes')(app); // This is new

app.listen(8000, () => console.log("The server is all fired up on port 8000"));