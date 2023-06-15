import './globals.css'
import { UserProvider } from '../context/Context'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
         <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="black" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="description" content="Servicios Notariales" />
        <meta name="keywords" content="AlvaroGC" />
        <meta name="author" content="AlvaroGC" />
        <title>AlvaroGC</title>
      </head>
      <body className={`${inter.className} bg-white`}>
      <UserProvider>

        <Navbar></Navbar> 
        {children}
        </UserProvider>

        </body>
    </html>
  )
}
