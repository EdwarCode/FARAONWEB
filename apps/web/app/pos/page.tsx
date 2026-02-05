import { modules, orderPipeline } from '../lib/mock-data';

export default function PosDashboard() {
  return (
    <div>
      <h1>Panel Administrativo</h1>
      <p style={{ marginTop: 8, color: 'var(--muted)' }}>
        Resumen en tiempo real de ventas, mesas y pedidos.
      </p>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="cards">
          {modules.map((module) => (
            <article className="card" key={module.title}>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <strong style={{ fontSize: '1.5rem' }}>{module.stat}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-title">
          <h2>Estado de pedidos</h2>
          <span className="badge">Domicilios</span>
        </div>
        <div className="cards">
          {orderPipeline.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong style={{ fontSize: '1.5rem' }}>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
