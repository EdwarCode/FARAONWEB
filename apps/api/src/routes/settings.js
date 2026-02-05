import { Router } from 'express';

export const settingsRouter = Router();

settingsRouter.get('/', (req, res) => {
  res.json({
    message: 'Configuración de tienda online (envío, horarios, colores, redes sociales).'
  });
});

settingsRouter.patch('/', (req, res) => {
  res.json({
    message: 'Actualizar configuración de tienda online.',
    payload: req.body
  });
});
