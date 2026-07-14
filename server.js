import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';
import mysql from 'mysql2/promise';

dotenv.config();

const { Pool } = pkg;
const app = express();
const PORT = process.env.PORT || 5000;
const dbType = process.env.DB_TYPE || 'postgres';

app.use(cors());
app.use(express.json());

let pool = null;

if (dbType === 'mysql') {
  pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'portfolio',
    waitForConnections: true,
    connectionLimit: 10,
  });
} else {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in your name, email, and message.' });
  }

  try {
    if (dbType === 'mysql') {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await pool.query(
        'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
        [name, email, message]
      );
    } else {
      await pool.query(
        `CREATE TABLE IF NOT EXISTS contact_messages (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
      );

      await pool.query(
        'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)',
        [name, email, message]
      );
    }

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error('Contact save failed:', error);
    return res.status(500).json({ error: 'Unable to save your message right now.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
