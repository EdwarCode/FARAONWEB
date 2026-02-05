export default function MostradorPage() {
  return (
    <div>
      <h1>Mostrador</h1>
      <p style={{ marginTop: 8, color: 'var(--muted)' }}>
        Flujo rápido de venta, ideal para pantalla táctil.
      </p>

      <div className="grid-2" style={{ marginTop: 24 }}>
        <article className="card">
          <h3>Productos</h3>
          <p>Buscar y agregar productos por categoría.</p>
          <div className="toolbar" style={{ marginTop: 12 }}>
            <button className="button">Tacos</button>
            <button className="button">Bebidas</button>
            <button className="button">Extras</button>
          </div>
        </article>
        <article className="card">
          <h3>Resumen de venta</h3>
          <p>2x Taco al pastor · 1x Agua fresca</p>
          <strong style={{ fontSize: '1.5rem' }}>$150.00</strong>
          <div className="toolbar" style={{ marginTop: 12 }}>
            <button className="button">Efectivo</button>
            <button className="button">Tarjeta</button>
          </div>
          <button
            className="button"
            style={{ marginTop: 12, background: 'var(--brand)', color: 'white' }}
          >
            Finalizar venta
          </button>
        </article>
      </div>
    </div>
  );
}
