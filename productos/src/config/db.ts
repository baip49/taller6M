import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'xVrBpeo)1JbSfYWh',
    database: 'dbtaller',
});

export default pool;