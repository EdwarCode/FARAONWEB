import { Router } from 'express';

export const authRouter = Router();

authRouter.post('/login', (req, res) => {
  res.json({
    message: 'Implementar autenticación con JWT y roles.',
    payload: req.body
  });
});

authRouter.post('/users', (req, res) => {
  res.json({
    message: 'Endpoint para crear usuarios (solo admin).',
    payload: req.body
  });
});

authRouter.patch('/users/:id', (req, res) => {
  res.json({
    message: 'Endpoint para actualizar estado/rol/permisos de usuarios.',
    id: req.params.id,
    payload: req.body
  });
});
