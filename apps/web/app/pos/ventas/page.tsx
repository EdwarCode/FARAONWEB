export default function VentasPage() {
  return (
    <div>
      <h1>Ventas e Historial</h1>
      <p style={{ marginTop: 8, color: 'var(--muted)' }}>
        Filtra por fecha, mesero, repartidor, canal de venta y método de pago.
      </p>

      <div className="toolbar">
        <input className="input" placeholder="Fecha" />
        <input className="input" placeholder="Mesero" />
        <input className="input" placeholder="Repartidor" />
        <input className="input" placeholder="Tipo de venta" />
        <input className="input" placeholder="Método de pago" />
        <button className="button" style={{ background: 'var(--brand)', color: 'white' }}>
          Exportar PDF/Excel
        </button>
      </div>

      <div className="cards">
        <article className="card">
          <h3>Total vendido</h3>
          <strong style={{ fontSize: '2rem' }}>$18,420</strong>
          <p>Incluye mostrador, mesas y domicilios.</p>
        </article>
        <article className="card">
          <h3>Productos top</h3>
          <p>Pastor, suadero, gringas y bebidas.</p>
        </article>
        <article className="card">
          <h3>Métodos de pago</h3>
          <p>60% efectivo · 25% tarjeta · 15% transferencia.</p>
        </article>
      </div>
    </div>
  );
}
