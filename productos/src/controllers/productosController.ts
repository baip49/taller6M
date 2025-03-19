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
    try {
        await pool.query('INSERT INTO productos (nombre, precio, descripcion, categoria) VALUES (?, ?, ?, ?)', [nombre, precio, descripcion, categoria]);
        res.status(201).json({ mensaje: 'Producto agregado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el producto' });
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