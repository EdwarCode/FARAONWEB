export default function MenuPage() {
  return (
    <div>
      <h1>Menú y Productos</h1>
      <p style={{ marginTop: 8, color: 'var(--muted)' }}>
        Administra categorías, precios, imágenes y extras.
      </p>

      <div className="grid-2" style={{ marginTop: 24 }}>
        <article className="card">
          <h3>Categorías</h3>
          <p>Tacos, bebidas, extras, promociones.</p>
          <button className="button" style={{ marginTop: 12 }}>
            Crear categoría
          </button>
        </article>
        <article className="card">
          <h3>Productos</h3>
          <p>Nombre, precio, descripción, imagen, disponibilidad.</p>
          <button className="button" style={{ marginTop: 12 }}>
            Agregar producto
          </button>
        </article>
      </div>
    </div>
  );
}
