import express from 'express';
import { authValidation } from "./midlewares/authValidation.js";


const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.listen(port, () => {
    console.log(`el servidor esta escuchando el el puerto ${port}`);
});