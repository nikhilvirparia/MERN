const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:_id', JokeController.findOneSingleJoke);
    app.put('/api/jokes/update/:_id', JokeController.updateExistingJoke);
    app.post('/api/jokes/create', JokeController.createNewJoke);
    app.delete('/api/jokes/delete/:_id', JokeController.deleteAnExistingJoke);
}