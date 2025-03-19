import express from 'express';
import productosRoutes from '../../productos/src/routes/productosRoutes';
import pool from '../../productos/src/config/db';


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('api-gateway');
});

app.use('/api', productosRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto 3000`);
});