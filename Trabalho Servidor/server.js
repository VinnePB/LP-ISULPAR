// Importando o módulo express
const express = require('express');
const app = express();
 
// Definindo uma rota principal
app.get('/', (req, res) => {
  res.send('Olá, Mundo! Este é um servidor básico com Node.js.');
});
 
 
// Definindo uma rota principal
app.get('/part1', (req, res) => {
  res.send('Olá, Mundo! Este é um servidor básico com Node.js.');
});
 
 
// Definindo uma rota principal
app.get('/part2', (req, res) => {
  res.send('<>');
});
 
// Configurando o servidor para escutar na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});