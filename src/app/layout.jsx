import './globals.css'
import { UserProvider } from '../context/Context'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AlvaroGC',
  description: 'Servicios Notariales',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} bg-white`}>
      <UserProvider>

        <Navbar></Navbar> 
        {children}
        </UserProvider>

        </body>
    </html>
  )
}
