const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Banco de dados simulado (até conectar no MongoDB)
let vehicles = [
  {
    _id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    km: 15000,
    price: 120000,
    images: ["https://via.placeholder.com/300x200?text=Toyota+Corolla"]
  },
  {
    _id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2022,
    km: 25000,
    price: 95000,
    images: ["https://via.placeholder.com/300x200?text=Honda+Civic"]
  }
];

// Rota para listar carros
app.get('/api/vehicles', (req, res) => {
  res.json(vehicles);
});

// Rota de teste
app.get('/', (req, res) => {
  res.send('Backend do AutoVista funcionando!');
});

// Conectar ao MongoDB (depois)
// mongoose.connect('sua-string-do-mongodb');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
