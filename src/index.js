const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Permissão de quem poderá acessar a aplicação
app.use(cors());

//Informa ao Express que será trabalhado com respostas em json
app.use(express.json())

app.use(routes);

app.listen(3333);
