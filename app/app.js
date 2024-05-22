import path from 'path'
import express from 'express';
import health from './routes/health';
const swaggerUi = require('swagger-ui-express');
const specs = require('./routes/swagger');

const app = express();


app.use(health);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default app;
