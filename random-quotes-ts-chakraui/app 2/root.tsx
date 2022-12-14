// root.tsx
import React, { useContext, useEffect } from 'react'
import { withEmotionCache } from '@emotion/react'
import { extendTheme, ChakraProvider, theme, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react'
import type { MetaFunction, LinksFunction, LoaderFunction } from '@remix-run/node' // Depends on the runtime you choose
import { ServerStyleContext, ClientStyleContext } from './context'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
})
export default function App() {
  const cookies = useLoaderData()

  return (
    <Document>
      <ChakraProvider theme={theme}
                      colorModeManager={typeof cookies === 'string' ? cookieStorageManagerSSR(cookies) : localStorageManager}>
        <Outlet />
      </ChakraProvider>
    </Document>
  )
}
export const loader: LoaderFunction = async ({ request }) => {

  return request.headers.get('cookie') ?? ''
}
export let links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
    }
  ]
}

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext)
    const clientStyleData = useContext(ClientStyleContext)

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head
      // re-inject tags
      const tags = emotionCache.sheet.tags
      emotionCache.sheet.flush()
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag)
      })
      // reset cache to reapply global styles
      clientStyleData?.reset()
    }, [])

    const colors = {
      brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac'
      }
    }
    const theme = extendTheme({ colors })

    return (
      <html lang='en'>
      <head>
        <Meta />
        <Links />
        {serverStyleData?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}
      </head>
      <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
      </body>
      </html>
    )
  }
)

