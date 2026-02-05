import { Router } from 'express';

export const customersRouter = Router();

customersRouter.get('/', (req, res) => {
  res.json({
    message: 'Listado de clientes con historial de pedidos.',
    filters: req.query
  });
});

customersRouter.post('/', (req, res) => {
  res.json({
    message: 'Crear cliente.',
    payload: req.body
  });
});

customersRouter.patch('/:id', (req, res) => {
  res.json({
    message: 'Actualizar cliente y notas internas.',
    id: req.params.id,
    payload: req.body
  });
});
