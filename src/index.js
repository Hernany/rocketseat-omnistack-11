const express = require('express');
const routes = require('./routes');

const app = express();

//Informa ao Express que será trabalhado com respostas em json
app.use(express.json())

app.use(routes);

app.listen(3333);
