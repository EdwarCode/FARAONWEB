import Link from 'next/link';

const features = [
  {
    title: 'POS completo para taquería',
    description: 'Mesas, mostrador y domicilios en un solo flujo táctil y rápido.'
  },
  {
    title: 'Ventas y reportes',
    description: 'Historial detallado con filtros y exportaciones en PDF/Excel.'
  },
  {
    title: 'Pedidos online integrados',
    description: 'Los pedidos web entran directo al POS y se notifican por WhatsApp.'
  }
];

const sections = [
  {
    title: 'Menú digital',
    description: 'Categorías, extras y disponibilidad controlada en tiempo real.'
  },
  {
    title: 'Clientes y fidelización',
    description: 'Historial, notas internas y contacto directo desde el POS.'
  },
  {
    title: 'Panel de configuración',
    description: 'Colores, horarios, envío y datos del negocio desde un solo panel.'
  }
];

export default function HomePage() {
  return (
    <div className="page">
      <header className="nav">
        <div className="container nav-inner">
          <strong>FARAONWEB</strong>
          <nav className="nav-links">
            <Link href="#menu">Menú</Link>
            <Link href="#nosotros">Nosotros</Link>
            <Link href="#contacto">Contacto</Link>
            <Link href="/pos">Entrar al POS</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">POS + Tienda Online</span>
            <h1>Control total para tu taquería en una sola plataforma.</h1>
            <p>
              Gestiona mesas, mostrador y domicilios con una experiencia moderna,
              rápida y lista para escalar a múltiples sucursales.
            </p>
            <div className="cta">
              <button className="button primary">Solicitar demo</button>
              <button className="button outline">Ver módulos</button>
            </div>
          </div>
          <div className="card">
            <h3>Pedidos en tiempo real</h3>
            <p>
              Tu web pública y el POS comparten datos. Cada pedido online se
              refleja automáticamente en domicilios.
            </p>
            <ul style={{ marginTop: 16, display: 'grid', gap: 8 }}>
              <li>✔ Notificación WhatsApp al cliente</li>
              <li>✔ Aviso inmediato al administrador</li>
              <li>✔ Estado de pedido actualizado</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="menu">
        <div className="container">
          <div className="section-title">
            <h2>Una operación centralizada</h2>
            <span className="badge">Panel Administrativo</span>
          </div>
          <div className="cards">
            {features.map((feature) => (
              <article className="card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="nosotros">
        <div className="container">
          <div className="section-title">
            <h2>Diseñado para restaurantes modernos</h2>
            <span className="badge">Tienda Online</span>
          </div>
          <div className="cards">
            {sections.map((section) => (
              <article className="card" key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contacto">
        <div className="container card">
          <div className="section-title">
            <h2>Contacto y ubicación</h2>
            <span className="badge">Estamos listos</span>
          </div>
          <div className="grid-2">
            <div>
              <p>
                <strong>Teléfono:</strong> +52 555 123 4567
              </p>
              <p>
                <strong>Horario:</strong> Lunes a Domingo, 12:00 - 23:00
              </p>
              <p>
                <strong>Dirección:</strong> Av. Taquitos 123, CDMX
              </p>
              <p>
                <strong>Redes:</strong> @faraonweb
              </p>
            </div>
            <div>
              <p>Mapa integrado aquí (Google Maps/Mapbox).</p>
              <div
                style={{
                  marginTop: 12,
                  width: '100%',
                  height: 160,
                  borderRadius: 16,
                  background: 'linear-gradient(120deg, #fef3c7, #fed7aa)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <strong>FARAONWEB POS</strong>
            <p>Solución completa para taquerías y restaurantes.</p>
          </div>
          <div>
            <p>Pedidos en línea</p>
            <p>WhatsApp automatizado</p>
            <p>Reportes y métricas</p>
          </div>
          <div>
            <p>Soporte 24/7</p>
            <p>Implementación por sucursal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
