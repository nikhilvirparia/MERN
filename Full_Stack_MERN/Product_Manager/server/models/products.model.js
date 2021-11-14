const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [ true, "Title is required"],
        minlength: [2, "Title must be at least 2 charcater"] 
    },
    price: { 
        type: Number,
        required: [true, "Number of price is required"] 
        
    },
    description: { 
        type: String,
        required: [true, "Description is required "]
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);