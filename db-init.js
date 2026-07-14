import dotenv from 'dotenv';
import pkg from 'pg';
import mysql from 'mysql2/promise';

dotenv.config();
const { Pool } = pkg;
const dbType = process.env.DB_TYPE || 'postgres';

async function initDatabase() {
  try {
    if (dbType === 'mysql') {
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
      });

      await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME || 'portfolio'}\``);
      await connection.query(`USE \`${process.env.DB_NAME || 'portfolio'}\``);
      await connection.query(`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('✅ MySQL database and table are ready.');
      await connection.end();
      return;
    }

    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error('DATABASE_URL is not set in .env');
    }

    const url = new URL(databaseUrl);
    const dbName = url.pathname?.slice(1) || 'portfolio';
    const adminUrl = new URL(databaseUrl);
    adminUrl.pathname = '/postgres';

    const adminPool = new Pool({ connectionString: adminUrl.toString() });

    try {
      await adminPool.query(`CREATE DATABASE "${dbName}"`);
      console.log(`✅ Database created: ${dbName}`);
    } catch (error) {
      if (error.code === '42P04' || error.message?.includes('already exists')) {
        console.log(`ℹ️ Database already exists: ${dbName}`);
      } else {
        throw error;
      }
    } finally {
      await adminPool.end();
    }

    const pool = new Pool({ connectionString: databaseUrl });
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('✅ PostgreSQL table created or already exists: contact_messages');
    } finally {
      await pool.end();
    }

    console.log('🎉 Database initialization complete.');
  } catch (error) {
    console.error('❌ Database initialization failed:', error.message || error);
    process.exit(1);
  }
}

initDatabase();
