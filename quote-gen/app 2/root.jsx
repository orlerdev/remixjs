import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import tailwind from './styles/tailwind.css'

export function links() {
  return [{ rel: 'stylesheet', href: tailwind }]
}

export const meta = () => ({
  charset: 'utf-8',
  title: 'Random Quote Generator',
  viewport: 'width=device-width,initial-scale=1'
})

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang='en'>
    <head>
      <Meta />
      <Links />
    </head>
    <body>
    {children}
    <ScrollRestoration />
    <Scripts />
    {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
    </body>
    </html>
  )
}

function Layout({ children }) {
  return (

  )
}

export function ErrorBoundary({ error }) {
  console.log(error)
  return (
    <Document>
      <Layout>
        <div>
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      </Layout>
    </Document>
  )
}
