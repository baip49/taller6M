import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productosRoutes from './routes/routes';

dotenv.config();


const app1 = express();
const app2 = express();
const PORT1 = process.env.PORT;
const PORT2 = process.env.PORT2;

app1.use(cors());
app2.use(cors());

app2.use('/', productosRoutes);

app1.get('/', (req, res) => {
    res.send('UNACH');
});

app2.get('/', (req, res) => {
    res.send('UNACH 2');
});

app1.listen(PORT1, () => {
    console.log(`Unach se ejecutó en el puerto: ${PORT1}`)
});

app2.listen(PORT2, () => {
    console.log(`Unach se ejecutó en el puerto: ${PORT2}`);
});