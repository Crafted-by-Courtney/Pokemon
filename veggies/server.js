const express = require('express');
const app = express();

const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package

app.get('/fruits', (req, res) => {
    res.send(fruits);
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(3000, () => {
    console.log('listening');
});