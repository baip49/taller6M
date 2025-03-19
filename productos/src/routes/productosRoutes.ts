import { Router } from 'express';
import { getProducts, all, addProduct } from '../controllers/productosController';
import { usuarios } from '../controllers/productosController';

const router = Router();

router.get('/productos', getProducts);
router.post('/productos/add', addProduct);
router.get('/productos/all', all);
router.get('/usuarios', usuarios)

export default router;