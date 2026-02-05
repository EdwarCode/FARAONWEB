export default function ConfiguracionPage() {
  return (
    <div>
      <h1>Configuración de Tienda Online</h1>
      <p style={{ marginTop: 8, color: 'var(--muted)' }}>
        Personaliza costos de envío, redes sociales y branding del sitio.
      </p>

      <div className="grid-2" style={{ marginTop: 24 }}>
        <article className="card">
          <h3>Información del negocio</h3>
          <div className="toolbar" style={{ marginTop: 12 }}>
            <input className="input" placeholder="Nombre" />
            <input className="input" placeholder="Teléfono" />
            <input className="input" placeholder="Dirección" />
            <input className="input" placeholder="Horarios" />
          </div>
        </article>
        <article className="card">
          <h3>Marca y colores</h3>
          <div className="toolbar" style={{ marginTop: 12 }}>
            <input className="input" placeholder="Color principal" />
            <input className="input" placeholder="Logo" />
            <input className="input" placeholder="Costo de envío" />
          </div>
          <button
            className="button"
            style={{ marginTop: 12, background: 'var(--brand)', color: 'white' }}
          >
            Guardar cambios
          </button>
        </article>
      </div>
    </div>
  );
}
