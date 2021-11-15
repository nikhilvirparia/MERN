const { Author } = require('../models/authors.model');


// Create new 
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

// Get One Author
module.exports.getOneAuthor = (request, response) => {
    Author.findOne({_id : request.params.id})
    .then(author => response.json(author))
    .catch(err => response.json(err))
}

// Get All Authors
module.exports.getAllAuthors = (request, response) => {
    Author.find()
    .then(authors => response.json(authors))
    .catch(err => response.json(err))
}

// Update Authors
module.exports.updateAuthors = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthors => response.json(updatedAuthors))
        .catch(err => response.json(err))
}

// Delete Authors
module.exports.deleteAuthors= (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
