export const modules = [
  {
    title: 'Ventas del día',
    description: 'Resumen rápido con filtros por mesero, repartidor y tipo de venta.',
    stat: '$12,480'
  },
  {
    title: 'Mesas activas',
    description: 'Plano visual con estados y órdenes en tiempo real.',
    stat: '8 mesas'
  },
  {
    title: 'Pedidos a domicilio',
    description: 'Nuevos, preparando, en camino y entregados.',
    stat: '15 hoy'
  }
];

export const tableStatus = [
  { label: 'Mesa 1', status: 'Libre', type: 'free' },
  { label: 'Mesa 2', status: 'Ocupada', type: 'busy' },
  { label: 'Mesa 3', status: 'Cuenta pedida', type: 'busy' },
  { label: 'Mesa 4', status: 'Pagada', type: 'paid' }
];

export const orderPipeline = [
  {
    title: 'Nuevo',
    value: 4,
    description: 'Pedidos recién creados'
  },
  {
    title: 'Preparando',
    value: 6,
    description: 'En cocina'
  },
  {
    title: 'En camino',
    value: 3,
    description: 'Repartidor asignado'
  },
  {
    title: 'Entregado',
    value: 12,
    description: 'Últimas 24 hrs'
  }
];
