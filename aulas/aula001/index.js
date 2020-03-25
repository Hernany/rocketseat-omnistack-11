const express = require('express');

const app = express();

var objResponse = {
    event: 'Omnistack Week 11.0',
    student: 'Hernany Santos'
};



app.get('/users', (request, response) => {
    //Pega as querystrings da url : QueryParams
    //localhost:3333/users
    const params = request.query;
    
    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.00',
        aluno: 'Hernany Santos'
    });
});

app.get('/users/:id', (request, response) => {
    //RouteParams
    //localhost:3333/users/1
    const params = request.query;
    
    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.00',
        aluno: 'Hernany Santos'
    });
});


app.listen(3333);
