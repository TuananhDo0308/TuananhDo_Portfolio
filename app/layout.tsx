import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Layout from '@/components/layout/layout'

export const metadata: Metadata = {
  title: "Tuan Anh Do - Frontend Developer",
  description:
    "Creative frontend developer crafting beautiful, interactive digital experiences with modern web technologies.",

  openGraph: {
    title: "Tuan Anh Do - Frontend Developer",
    description:
      "Creative frontend developer crafting beautiful, interactive digital experiences with modern web technologies.",
    siteName: "Tuan Anh Do Portfolio",
    url: "https://tuananhdo0308.github.io/TuananhDo_Portfolio",
    images: [
      {
        url: "/TuananhDo_Portfolio/metaimage.png",
        width: 1200,
        height: 630,
        alt: "Tuan Anh Do Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Tuan Anh Do - Frontend Developer",
    description:
      "Creative frontend developer crafting beautiful, interactive digital experiences with modern web technologies.",
    images: ["/TuananhDo_Portfolio/metaimage.png"],
  },
};

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
