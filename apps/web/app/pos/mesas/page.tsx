import { tableStatus } from '../../lib/mock-data';

export default function MesasPage() {
  return (
    <div>
      <h1>Modo Mesas</h1>
      <p style={{ marginTop: 8, color: 'var(--muted)' }}>
        Plano visual con estados de mesa y envío a cocina.
      </p>

      <div className="cards" style={{ marginTop: 24 }}>
        {tableStatus.map((table) => (
          <article className="card" key={table.label}>
            <div className={`status ${table.type}`}>
              <span />
              {table.status}
            </div>
            <h3 style={{ marginTop: 12 }}>{table.label}</h3>
            <p>Agregar productos · Dividir cuenta · Cerrar cuenta.</p>
            <button className="button" style={{ marginTop: 12 }}>
              Abrir detalle
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
