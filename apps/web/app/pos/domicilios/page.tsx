export default function DomiciliosPage() {
  return (
    <div>
      <h1>Domicilios</h1>
      <p style={{ marginTop: 8, color: 'var(--muted)' }}>
        Registra pedidos y asigna repartidor con estado actualizado.
      </p>

      <div className="grid-2" style={{ marginTop: 24 }}>
        <article className="card">
          <h3>Nuevo pedido</h3>
          <div className="toolbar" style={{ marginTop: 12 }}>
            <input className="input" placeholder="Nombre" />
            <input className="input" placeholder="Teléfono" />
            <input className="input" placeholder="Dirección" />
            <input className="input" placeholder="Referencias" />
          </div>
          <button
            className="button"
            style={{ marginTop: 12, background: 'var(--brand)', color: 'white' }}
          >
            Guardar pedido
          </button>
        </article>
        <article className="card">
          <h3>Estados del pedido</h3>
          <ul style={{ marginTop: 12, display: 'grid', gap: 8 }}>
            <li>Nuevo · Preparando · En camino · Entregado · Cancelado</li>
            <li>Asignar repartidor desde el POS.</li>
            <li>Notificación WhatsApp automática.</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
