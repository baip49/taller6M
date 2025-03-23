import { Router } from 'express';
import path from 'path';
import { getProducts, all, addProduct, editProduct, deleteProduct } from '../controllers/controller';
import { usuarios } from '../controllers/controller';

const router = Router();


router.get('/productos', (req, res) => {
    const filePath = path.join(__dirname, '../../src/pages/productos.html');
    res.sendFile(filePath);
});
router.get('/productos/list', getProducts);
router.post('/productos/add', addProduct);
router.put('/productos/edit/:id', editProduct);
router.delete('/productos/delete/:id', deleteProduct);
router.get('/all', all);
router.get('/usuarios', usuarios)

export default router;