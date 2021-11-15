const AuthorsController = require('../controllers/authors.controller');

module.exports = function(app){
   
    // Get All Authors
    app.get('/api/authors', AuthorsController.getAllAuthors);

    // Get One Authors
    app.get('/api/author/:id', AuthorsController.getOneAuthor);
    
    // Make Authors
    app.post('/api/authors/make', AuthorsController.createAuthor);
    
    // Update Authors
    app.put('/api/authors/:id', AuthorsController.updateAuthors);
    
    // Delete Authors
    app.delete('/api/authors/:id', AuthorsController.deleteAuthors);
}