import Link from 'next/link';

const links = [
  { href: '/pos', label: 'Dashboard' },
  { href: '/pos/ventas', label: 'Ventas' },
  { href: '/pos/mesas', label: 'Mesas' },
  { href: '/pos/mostrador', label: 'Mostrador' },
  { href: '/pos/domicilios', label: 'Domicilios' },
  { href: '/pos/menu', label: 'Menú' },
  { href: '/pos/clientes', label: 'Clientes' },
  { href: '/pos/usuarios', label: 'Usuarios' },
  { href: '/pos/configuracion', label: 'Configuración' }
];

export default function PosLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>POS Taquería</h2>
        <nav>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="content">{children}</main>
    </div>
  );
}
