import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { envs } from './src/settings/envs.js';
import { startConnection } from './src/settings/database.js';
import { usersRouter } from './src/routes/user.routes.js';
import { validateToken } from './src/middlewares/validate-token.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

const port = 3000;

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.listen(port, () => {
    console.log(`el servidor esta escuchando el el puerto ${port}`);
});