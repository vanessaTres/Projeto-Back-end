
const express = require('express');


const produtosRouter = require('./routes/produtos');


const app = express();


app.use(express.json());


app.use('/produtos', produtosRouter);


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});