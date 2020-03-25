const express = require('express');

const app = express();

var objResponse = {
    event: 'Omnistack Week 11.0',
    student: 'Hernany Santos'
};

//Aula 001
app.get('/', (request, response) => {
    return response.send('Hello World');
});

app.get('/evento', (request, response) => {
    return response.json(objResponse);
});


app.listen(3333);
