import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './infraestructure/config/SwaggerConfig';

dotenv.config();

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Parking API is running...');
});

export default app;
