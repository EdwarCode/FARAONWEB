import { Router } from 'express';

export const productsRouter = Router();

productsRouter.get('/', (req, res) => {
  res.json({
    message: 'Listado de productos y categorías.',
    filters: req.query
  });
});

productsRouter.post('/', (req, res) => {
  res.json({
    message: 'Crear producto con categoría, precio, imagen, extras.',
    payload: req.body
  });
});

productsRouter.patch('/:id', (req, res) => {
  res.json({
    message: 'Actualizar producto o disponibilidad.',
    id: req.params.id,
    payload: req.body
  });
});
