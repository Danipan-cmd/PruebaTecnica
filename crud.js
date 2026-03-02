const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const desiredPort = process.env.PORT || 4000;

app.get('/usuarios', async (req, res) => {
    try {
        const [usuarios] = await db.query('SELECT * FROM Tabla_paciente');
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
});
app.get('/citas', async (req, res) => {
    try {
        const [citas] = await db.query('SELECT * FROM Tabla_Cita');
        res.json(citas);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener citas" });
    }
});
app.listen(desiredPort, () => {
    console.log(`Servidor escuchando en el puerto ${desiredPort}`);
});