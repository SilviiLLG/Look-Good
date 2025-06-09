
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para archivos estáticos
app.use(express.static('public'));

// Rutas
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.get('/contacto', (req, res) => res.sendFile(__dirname + '/public/contacto.html'));
app.get('/quienes_somos', (req, res) => res.sendFile(__dirname + '/public/quienes_somos.html'));
app.get('/servicios', (req, res) => res.sendFile(__dirname + '/public/servicios.html'));
app.get('/trabajos', (req, res) => res.sendFile(__dirname + '/public/trabajos.html'));

app.listen(port, () => console.log(`Servidor escuchando en http://localhost:${port}`));
