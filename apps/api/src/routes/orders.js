import { Router } from 'express';

export const ordersRouter = Router();

ordersRouter.get('/', (req, res) => {
  res.json({
    message: 'Listado de órdenes con filtros por fecha, mesero, repartidor, canal, método de pago.',
    filters: req.query
  });
});

ordersRouter.post('/', (req, res) => {
  res.json({
    message: 'Crear orden (mesa, mostrador o domicilio).',
    payload: req.body
  });
});

ordersRouter.patch('/:id/status', (req, res) => {
  res.json({
    message: 'Actualizar estado de orden (preparando, en camino, entregado, cancelado).',
    id: req.params.id,
    payload: req.body
  });
});
