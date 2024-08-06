'use client'

import { NextUIProvider } from '@nextui-org/react'
import Header from './components/header'
import { QueryClient, QueryClientProvider } from 'react-query'
import './globals.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <head>
        <title>Query Music</title>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <NextUIProvider>
            <Header />
            {children}
          </NextUIProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
