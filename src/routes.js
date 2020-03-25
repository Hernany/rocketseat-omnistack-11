const express = require('express');
//Próprio do Node para criar criptografia
const crypto = require('crypto');

const connection = require('./db/connection');


const routes = express.Router();

routes.post('/ongs', async (request, response) => {
    
    console.log(request.body);

    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({id});
});

routes.post('/ongs/create', (request, response) => {
    
    const id = crypto.randomBytes(4).toString('HEX');

    return response.json({id});
});


module.exports = routes;