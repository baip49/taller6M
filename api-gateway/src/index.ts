import express from 'express';
import routes from '../../productos/src/routes/routes';


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('api-gateway');
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto 3000`);
});