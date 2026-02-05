import './globals.css';

export const metadata = {
  title: 'FARAONWEB POS',
  description: 'Sistema POS y tienda online para restaurante/taquería.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
