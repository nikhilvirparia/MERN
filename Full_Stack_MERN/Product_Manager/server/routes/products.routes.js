const ProductsController = require('../controllers/products.controller');
module.exports = function(app){
    app.get('/api/product/:id', ProductsController.getProduct);
    app.get('/api/product', ProductsController.getAllProducts);
    app.post('/api/product', ProductsController.createProduct);
    app.put('/api/product/:id', ProductsController.updateProduct);
    app.delete('/api/product/:id', ProductsController.deleteProduct);
}