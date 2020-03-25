const express = require('express');

const app = express();

var objResponse = {
    event: 'Omnistack Week 11.0',
    student: 'Hernany Santos'
};

app.get('/', (request, response) => {
    return response.send('Hello World');
});

app.get('/evento', (request, response) => {
    return response.json(objResponse);
});

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        event: 'Omnistack Week 11.0',
        student: 'Hernany Santos'
    });
});


app.listen(3333);
