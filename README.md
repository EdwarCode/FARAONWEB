# FARAONWEB POS + Tienda Online

Sistema POS para restaurante/taquería con panel administrativo y tienda online conectada a la misma base de datos.

## Objetivo
Construir una base moderna, rápida y escalable para:
- POS administrativo (mesas, mostrador, domicilios, ventas, usuarios, clientes, menú).
- Web pública profesional + tienda online con pedidos en línea.
- Integración automática de pedidos online hacia el POS y notificaciones vía WhatsApp.

## Arquitectura
```
apps/
  api/            # Backend Node.js/Express (REST)
  web/            # Frontend Next.js (panel + web pública)

数据库/
  schema.sql      # Esquema PostgreSQL
```

### Tecnologías
- Frontend: Next.js (React)
- Backend: Node.js + Express
- DB: PostgreSQL
- Autenticación: JWT + roles
- Notificaciones: WhatsApp (proveedor externo tipo Twilio/360dialog)

## Configuración rápida (local)
1. Instala dependencias por app:
   ```bash
   cd apps/api && npm install
   cd ../web && npm install
   ```
2. Crea variables de entorno (ver ejemplos en cada app).
3. Arranca backend y frontend:
   ```bash
   cd apps/api && npm run dev
   cd ../web && npm run dev
   ```

## Módulos principales
- **Ventas (Historial):** filtros por fecha, mesero, repartidor, tipo de venta, método de pago y exportación.
- **Mesas:** plano visual, estados, envío a cocina, dividir cuenta, cerrar cuenta.
- **Mostrador:** flujo rápido con ticket digital.
- **Domicilios:** alta de pedidos, estados y asignación de repartidor.
- **Menú/Productos:** categorías, imágenes, extras y disponibilidad.
- **Clientes:** historial y notas.
- **Usuarios:** roles, permisos y activación.

## Roadmap técnico
- Webhooks para pedidos online → POS.
- Mensajería WhatsApp automática a cliente y admin.
- Multi-sucursal con separación por tienda.

## Licencia
Privado.
