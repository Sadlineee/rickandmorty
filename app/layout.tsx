import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import StyledComponentsRegistry from '@/lib/registry'
import Theme from '@/components/Theme'
import { oswald } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'rickandmorty'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <head>
        <link rel='icon' href='./favicon.ico' sizes='any' />
      </head>
      <body className={oswald.className}>
        <Theme>
          <StyledComponentsRegistry>
            {children}
            <Analytics />
          </StyledComponentsRegistry>
        </Theme>
      </body>
    </html>
  )
}