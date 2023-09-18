import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valorant 101',
  description: 'Valorant 101',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
