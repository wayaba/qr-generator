import { Background } from '@/components/Background'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Generador de QR',
  description: 'Generá tus propios códigos Qr. Descargalos y copiate el link'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <main className="grid h-screen justify-center items-center">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
