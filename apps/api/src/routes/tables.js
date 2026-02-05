import { Router } from 'express';

export const tablesRouter = Router();

tablesRouter.get('/', (req, res) => {
  res.json({
    message: 'Listado de mesas con estado y posición para plano visual.'
  });
});

tablesRouter.post('/', (req, res) => {
  res.json({
    message: 'Crear mesa con coordenadas y capacidad.',
    payload: req.body
  });
});

tablesRouter.patch('/:id', (req, res) => {
  res.json({
    message: 'Actualizar estado o posición de mesa.',
    id: req.params.id,
    payload: req.body
  });
});
