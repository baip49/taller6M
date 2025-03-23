import { Request, Response } from 'express';
import pool from '../config/db';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

export const addProduct = async (req: Request, res: Response) => {
    const { nombre, precio, descripcion, categoria } = req.body;
    const created_at = new Date();
    const updated_at = new Date();
    try {
        await pool.query(
            'INSERT INTO productos (nombre, precio, descripcion, categoria, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)', 
            [nombre, precio, descripcion, categoria, created_at, updated_at]
        );
        res.status(201).json({ mensaje: 'Producto agregado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el producto' });
    }
};

export const editProduct = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params; 
    const { nombre, precio, descripcion, categoria } = req.body;
    const updated_at = new Date();

    try {
        const [result] = await pool.query(
            'UPDATE productos SET nombre = ?, precio = ?, descripcion = ?, categoria = ?, updated_at = ? WHERE id = ?',
            [nombre, precio, descripcion, categoria, updated_at, id]
        );

        if ((result as any).affectedRows === 0) {
            res.status(404).json({ error: 'Producto no encontrado' });
            return;
        }

        res.status(200).json({ mensaje: 'Producto actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const [result] = await pool.query('DELETE FROM productos WHERE id = ?', [id]);

        if ((result as any).affectedRows === 0) {
            res.status(404).json({ error: 'Producto no encontrado' });
            return;
        }

        res.status(200).json({ mensaje: 'Producto eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};


/*
curl -X POST http://localhost:3000/api/productos/add \
-H "Content-Type: application/json" \
-d '{
    "nombre": "Producto 1",
    "precio": 100,
    "descripcion": "Descripción del producto 1",
    "categoria": "Categoría 1"
}'
 */
export const all = (req: Request, res: Response) => {
    res.status(200).json({
        respuesta: 'La solicitud fue exitosa (ALL)',
        estado: 200
    });
}

export const usuarios = (req: Request, res: Response) => {
    res.status(200).json([
        { id: 1, nombre: 'Juan', email: "juan@example.com" },
        { id: 2, nombre: 'Ana García', email: "ana@example.com" },
        { id: 3, nombre: 'Carlos López', email: "carlos@example.com" }
    ]);
};