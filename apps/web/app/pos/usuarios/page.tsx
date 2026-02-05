export default function UsuariosPage() {
  return (
    <div>
      <h1>Usuarios y Permisos</h1>
      <p style={{ marginTop: 8, color: 'var(--muted)' }}>
        El administrador gestiona roles y acceso por módulo.
      </p>

      <div className="grid-2" style={{ marginTop: 24 }}>
        <article className="card">
          <h3>Crear usuario</h3>
          <div className="toolbar" style={{ marginTop: 12 }}>
            <input className="input" placeholder="Nombre" />
            <input className="input" placeholder="Correo" />
            <input className="input" placeholder="Rol" />
          </div>
          <button
            className="button"
            style={{ marginTop: 12, background: 'var(--brand)', color: 'white' }}
          >
            Guardar usuario
          </button>
        </article>
        <article className="card">
          <h3>Roles disponibles</h3>
          <ul style={{ marginTop: 12, display: 'grid', gap: 8 }}>
            <li>Administrador: acceso total</li>
            <li>Cajero: ventas y mostrador</li>
            <li>Mesero: mesas y órdenes</li>
            <li>Repartidor: domicilios asignados</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
