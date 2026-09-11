import express from 'express';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Route imports
import authRoutes from './routes/authRoutes.js';
import tripRoutes from './routes/tripRoutes.js';
import bucketRoutes from './routes/bucketRoutes.js';
import consentRoutes from './routes/consentRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/bucketlist', bucketRoutes);
app.use('/api/consent', consentRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
