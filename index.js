const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});

app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + "/src/sobre.html");
});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000: localhost:3000");
});