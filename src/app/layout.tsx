import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

export const metadata: Metadata = {
  title: 'Valorant 101',
  description: 'Valorant 101',
  icons: {
    icon: '/icon.ico'
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
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
