const express = require('express');
const Calculadora = require('../model/calculadora'); // Make sure the file name matches your actual file name
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { base, altura } = req.body;
    const area = Calculadora.AreaTriangulo(
        parseFloat(base),
        parseFloat(altura)
    );
    res.redirect(`/resultado.html?area=${area}`);
});

module.exports = resultado;