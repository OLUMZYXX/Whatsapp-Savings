'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../app/globals.css'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAuthPage =
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname === '/forgot-password' ||
    pathname === '/reset-password'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <html lang='en'>
      <head>
        <title>SavingsHub - Group Savings Made Easy</title>
        <meta
          name='description'
          content='Create savings groups, manage contributions, and save together with friends and family using WhatsApp. SavingsHub makes group saving simple and secure.'
        />
        <meta name='application-name' content='SavingsHub' />
        <link rel='icon' href='/next.svg' type='image/svg+xml' />
      </head>
      <body>
        {!isAuthPage && <Navbar />}
        <main>{children}</main>
        {!isAuthPage && <Footer className='mt-30' />}
      </body>
    </html>
  )
}
