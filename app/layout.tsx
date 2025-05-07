import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Traveler UX/UI by Phạm Lê Ngọc Sơn',
  description: 'Travel UI/UX App for Camping designed by Phạm Lê Ngọc Sơn',
  authors: [{ name: 'Phạm Lê Ngọc Sơn' }],
  creator: 'Phạm Lê Ngọc Sơn'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
