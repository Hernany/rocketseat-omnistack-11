const express = require('express');

const routes = express.Router();

var objResponse = {
    event: 'Omnistack Week 11.0',
    student: 'Hernany Santos'
};

routes.get('/', (request, response) => {
    return response.send('Hello World');
});

routes.get('/evento', (request, response) => {
    return response.json(objResponse);
});

routes.post('/users', (request, response) => {
    const body = request.body;

    return response.json({
        event: 'Omnistack Week 11.0',
        student: 'Hernany Santos'
    });
});

module.exports = routes;