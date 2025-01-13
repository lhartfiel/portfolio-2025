import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import './index.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lindsay Hartfiel - Portfolio</title>
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen w-full flex-col items-center">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
