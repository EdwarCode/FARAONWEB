export default function ClientesPage() {
  return (
    <div>
      <h1>Clientes</h1>
      <p style={{ marginTop: 8, color: 'var(--muted)' }}>
        Base de datos de clientes y su historial de pedidos.
      </p>

      <div className="cards" style={{ marginTop: 24 }}>
        <article className="card">
          <h3>Juan Pérez</h3>
          <p>Tel: 55 1234 5678</p>
          <p>Dirección: Calle Mezcal 45</p>
          <p>Notas: Prefiere tortillas de maíz.</p>
        </article>
        <article className="card">
          <h3>María López</h3>
          <p>Tel: 55 9876 1234</p>
          <p>Dirección: Av. Pastor 210</p>
          <p>Notas: Pide extra salsa verde.</p>
        </article>
      </div>
    </div>
  );
}
