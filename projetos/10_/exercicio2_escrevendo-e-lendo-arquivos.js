const fs = require('fs').promises;
const path = require('path');
const filePath = path.resolve(__dirname, '..', '..', 'testes' , 'teste.txt');

const pessoas = [
    {nome: 'Maria'},
    {nome: 'Pedro'},
    {nome: 'Sofia'},
    {nome: 'José'},
    {nome: 'Nora'},
    {nome: 'Flor'},
    {nome: 'Benta'},
    {nome: 'Emilho'},
];

const json = JSON.stringify(pessoas, '', 2);

fs.writeFile(filePath, json, {flag: 'w'});
