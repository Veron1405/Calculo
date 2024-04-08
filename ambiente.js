const express = require('express');
const CalculadoraController = require('./controller/executa');
const app = express();

app.use(express.urlencoded({ extented: true }));
app.use(express.json());
app.use(express.static(__dirname + '/view'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'view/index.html');
});
app.use('/calcular', CalculadoraController);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
});