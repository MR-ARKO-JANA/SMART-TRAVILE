import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import pool from './config/db.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 5000;

const initDatabase = async () => {
  try {
    const schemaPath = join(__dirname, '..', 'schema.sql');
    const schema = readFileSync(schemaPath, 'utf-8');
    await pool.query(schema);
    console.log('✅ Database tables initialized');
  } catch (error) {
    console.error('⚠️  Could not initialize tables:', error.message);
  }
};

const startServer = async () => {
  try {
    // Test database connection
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Neon PostgreSQL connected at:', result.rows[0].now);

    // Auto-create tables from schema.sql
    await initDatabase();

    app.listen(PORT, () => {
      console.log(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('⚠️  Starting server without database...');
    app.listen(PORT, () => {
      console.log(`🚀 Server running WITHOUT database on port ${PORT}`);
    });
  }
};

startServer();
