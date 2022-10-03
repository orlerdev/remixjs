import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import globalStyles from '~/styles/global.css'

export const links = () => [{ rel: 'stylesheet', href: globalStyles }]

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
  description: 'Basic app using Remix.js',
  keywords: 'remix, react, javascript, beginner'
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
    <>
      <nav className='navbar'>
        <Link to='/' className='logo'>
          Random Quote Generator
        </Link>

        <ul className='nav'>
          <li>
            <Link to='/quotes'>Quotes</Link>
          </li>
        </ul>
      </nav>

      <div className='container'>
        {children}
      </div>
    </>
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
