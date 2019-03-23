const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    app.send('BEM VINDO!');
});

app.listen(3000, console.log('SERVIDOR RODANDO A TODO VAPOR!'));