'use client'
import { useUser } from '@/context/Context'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { handleSignOut } from '@/firebase/database'
import Button from '@/components/Button'


export default function Navbar({ children }) {
    const { user, userDB, item, setUserItem, modal, setUserModal, setUserProfile, setUserSuccess, success, setUserDatas } = useUser()

    const router = useRouter()
    const pathname = usePathname();
    const [nav, setNav] = useState(false)

    const signOutHandler = () => {
        handleSignOut()
    }

    const pathnameHandler = () => {
        console.log(pathname)
    }

    return (
        <nav className="w-screen fixed top-0 z-10 ">
            <div className="max-w-screen flex flex-wrap items-center justify-between bg-gray-950 mx-auto p-4 z-[1000]">
                <a className="flex items-center text-white">
                    <img src="/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />AlvaroGC
                </a>
                <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setNav(!nav)}>
                    <span className="sr-only">Open menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"  ></path></svg>
                </button>
            </div>
            {<div className={`absolute top-[60px] w-1/2  transition-all z-0 ${nav ? 'right-0' : 'right-[-550px]'} lg:w-auto lg:right-[35px] lg:top-[0px] lg:flex lg:h-[60px]`} >
                <ul className="flex flex-col bg-gray-950 p-4 lg:p-0 mt-4 font-normal border border-gray-100 rounded-lg  lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:flex-row lg:items-center">
                    <li>
                        <a href="#" className={`hidden lg:block py-2 pl-3 pr-4 text-gray-200 bg-[#00A582] rounded lg:bg-transparent lg:text-[#00A582] lg:p-0 ${router.path}`} >Inicio</a>
                    </li>
                    <li>
                        <a href="#Servicios" className="hidden lg:block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0" onClick={pathnameHandler}>Servicios</a>
                    </li>
                    <li>
                        <a href="#Articulos" className="hidden lg:block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0">Articulos</a>
                    </li>
                    {/* <li>
                        <a href="#AcercaDeMi" className="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0">Acerca de mi</a>
                    </li> */}
                    <li>
                        <a href="#Contactos" className="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0">Contactos</a>
                    </li>
                    <li>
                        <a href="#Soporte" className="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0">Soporte</a>
                    </li>
                    {user && <li>
                        <Button theme="MiniPrimary" click={signOutHandler}>Cerrar sesión</Button>
                    </li>}
                </ul>
            </div>}
        </nav>
    )
}