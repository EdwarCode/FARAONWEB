import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { healthRouter } from './routes/health.js';
import { authRouter } from './routes/auth.js';
import { ordersRouter } from './routes/orders.js';
import { tablesRouter } from './routes/tables.js';
import { productsRouter } from './routes/products.js';
import { customersRouter } from './routes/customers.js';
import { settingsRouter } from './routes/settings.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/health', healthRouter);
app.use('/api/auth', authRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/tables', tablesRouter);
app.use('/api/products', productsRouter);
app.use('/api/customers', customersRouter);
app.use('/api/settings', settingsRouter);

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
