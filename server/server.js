import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';
import { corsOptions } from './config/cors.js';
import { errorHandler } from './middleware/errorHandler.js';
import { setupSockets } from './sockets/socketHandler.js';

// Route imports
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import aiRoutes from './routes/aiRoutes.js';

const app = express();
const server = http.createServer(app);

// Initialize Socket.io with CORS
const io = new SocketIOServer(server, {
  cors: corsOptions,
});

// Connect to Database
connectDB();

// Sockets setup
setupSockets(io);

// Security & Parsing Middleware
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

if (ENV.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // Limit each IP to 300 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', limiter);

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'WorkNest AI API',
  });
});

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/ai', aiRoutes);

// Global Error Handler
app.use(errorHandler);

// Start Server
const PORT = ENV.PORT;
server.listen(PORT, () => {
  console.log(`[WorkNest Server] Running on http://localhost:${PORT} in ${ENV.NODE_ENV} mode`);
});

export { app, server, io };
