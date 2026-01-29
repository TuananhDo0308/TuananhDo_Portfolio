import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Layout from '@/components/layout/layout'
export const metadata: Metadata = {
  title: 'TuananhDo - Frontend Developer',
  description: 'Creative frontend developer crafting beautiful, interactive digital experiences with modern web technologies.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased bg-black text-white`}>          
        <Layout>
          {children}
        </Layout>
        <Analytics />   
      </body>
    </html>
  )
}
