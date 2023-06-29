'use client'
import { useUser } from '@/context/Context'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';



export default function Navbar({ children, funcion }) {
    const router = useRouter()
    const pathname = usePathname();
    const [nav, setNav] = useState(false)
    const [add, setAdd] = useState(false)
    const { user, userDB, item, setUserItem, modal, setUserModal, setUserProfile, setUserSuccess, success, setUserDatas } = useUser()




    const pathnameHandler = () => {
        console.log(pathname)
    }




    const handlerAdd = () => {
        setAdd(!add)
    }

    const handlerShare = () => {
        window.open('https://wa.me/?text=https://alvarogc.com/', '_blank')
    }
    return (
        <>
            {user && <div className={`fixed right-[20px] transition-all ease-in-out duration-300 ${add ? 'bottom-[150px] lg:bottom-[73px]' : 'bottom-[-250px] lg:bottom-[73px]'} z-30`}>
                <button type="button" onClick={() => {setUserItem(undefined); funcion('Portada')}} className="h-[50px] w-[50px] my-1 text-blue-700 bg-gray-950 border border-gray-700 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-gray-500 font-medium rounded-full text-sm p-2.5 text-center flex justify-center items-center ">
                    <svg className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" fill="#636363"></path>
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
                <button type="button" onClick={() => {setUserItem(undefined); funcion('Servicios')}} className="h-[50px] w-[50px] my-1 bg-gray-950 border border-gray-700 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-gray-500 font-medium rounded-full text-sm text-center flex justify-center items-center p-0">
                    <svg className="w-7 h-4 mb-1 mr-0.5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V8C22 6.9 21.1 6 20 6ZM10 4H14V6H10V4Z" fill="#636363" />
                        <path d="M13.8295 12.4545C13.7784 12.0227 13.571 11.6875 13.2074 11.4489C12.8438 11.2102 12.3977 11.0909 11.8693 11.0909C11.483 11.0909 11.1449 11.1534 10.8551 11.2784C10.5682 11.4034 10.3438 11.5753 10.1818 11.794C10.0227 12.0128 9.94318 12.2614 9.94318 12.5398C9.94318 12.7727 9.99858 12.973 10.1094 13.1406C10.223 13.3054 10.3679 13.4432 10.544 13.554C10.7202 13.6619 10.9048 13.7514 11.098 13.8224C11.2912 13.8906 11.4688 13.946 11.6307 13.9886L12.517 14.2273C12.7443 14.2869 12.9972 14.3693 13.2756 14.4744C13.5568 14.5795 13.8253 14.723 14.081 14.9048C14.3395 15.0838 14.5526 15.3139 14.7202 15.5952C14.8878 15.8764 14.9716 16.2216 14.9716 16.6307C14.9716 17.1023 14.848 17.5284 14.6009 17.9091C14.3565 18.2898 13.9986 18.5923 13.527 18.8168C13.0582 19.0412 12.4886 19.1534 11.8182 19.1534C11.1932 19.1534 10.652 19.0526 10.1946 18.8509C9.74006 18.6491 9.3821 18.3679 9.12074 18.0071C8.86222 17.6463 8.71591 17.2273 8.68182 16.75H9.77273C9.80114 17.0795 9.91193 17.3523 10.1051 17.5682C10.3011 17.7812 10.5483 17.9403 10.8466 18.0455C11.1477 18.1477 11.4716 18.1989 11.8182 18.1989C12.2216 18.1989 12.5838 18.1335 12.9048 18.0028C13.2259 17.8693 13.4801 17.6847 13.6676 17.4489C13.8551 17.2102 13.9489 16.9318 13.9489 16.6136C13.9489 16.3239 13.8679 16.0881 13.706 15.9062C13.544 15.7244 13.331 15.5767 13.0668 15.4631C12.8026 15.3494 12.517 15.25 12.2102 15.1648L11.1364 14.858C10.4545 14.6619 9.91477 14.3821 9.51705 14.0185C9.11932 13.6548 8.92045 13.179 8.92045 12.5909C8.92045 12.1023 9.05256 11.6761 9.31676 11.3125C9.58381 10.946 9.94176 10.6619 10.3906 10.4602C10.8423 10.2557 11.3466 10.1534 11.9034 10.1534C12.4659 10.1534 12.9659 10.2543 13.4034 10.456C13.8409 10.6548 14.1875 10.9276 14.4432 11.2741C14.7017 11.6207 14.8381 12.0142 14.8523 12.4545H13.8295Z" fill="none" />
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
                <button type="button" onClick={() => {setUserItem(undefined); funcion('Articulos')}} className="h-[50px] w-[50px] my-1 text-blue-700 bg-gray-950 border border-gray-700 flex- hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-gray-500 font-medium rounded-full text-sm p-2.5 text-center flex justify-center items-center ">
                    <svg className="w-5 h-6 ml-1 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M13 20C13.5304 20 14.0391 19.7893 14.4142 19.4142C14.7893 19.0391 15 18.5304 15 18V5C15 4.46957 14.7893 3.96086 14.4142 3.58579C14.0391 3.21071 13.5304 3 13 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H13ZM9 5H13V10H9V5ZM4 5H8V6H4V5ZM4 7H8V8H4V7ZM4 9H8V10H4V9ZM4 11H13V12H4V11ZM4 13H13V14H4V13ZM4 15H13V16H4V15Z" fill="#636363" />
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
                <button type="button" onClick={() => {setUserItem(undefined); funcion('Contactos')}} className="h-[50px] w-[50px] my-1 text-blue-700 bg-gray-950 border border-gray-700 flex- hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-gray-500 font-medium rounded-full text-sm p-2.5 text-center flex justify-center items-center ">
                <span className="text-gray-500"> C</span>

                    <span className="sr-only">Icon description</span>
                </button>
            </div>}
            <div className={`fixed bottom-0 left-0 z-0 w-full h-16 bg-white border-t border-gray-200  dark:bg-gray-700 dark:border-gray-600 lg:hidden`}>

                <div className="relative grid h-full max-w-lg grid-cols-4 mx-auto font-medium z-50">
                    <a href="#" className="inline-flex flex-col items-center justify-end px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" fill="#636363"></path>
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 pb-[7px] dark:group-hover:text-blue-500">Inicio</span>
                    </a>
                    <a href="#Servicios" type="button" className="inline-flex flex-col items-center justify-end px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V8C22 6.9 21.1 6 20 6ZM10 4H14V6H10V4Z" fill="#636363" />
                            <path d="M13.8295 12.4545C13.7784 12.0227 13.571 11.6875 13.2074 11.4489C12.8438 11.2102 12.3977 11.0909 11.8693 11.0909C11.483 11.0909 11.1449 11.1534 10.8551 11.2784C10.5682 11.4034 10.3438 11.5753 10.1818 11.794C10.0227 12.0128 9.94318 12.2614 9.94318 12.5398C9.94318 12.7727 9.99858 12.973 10.1094 13.1406C10.223 13.3054 10.3679 13.4432 10.544 13.554C10.7202 13.6619 10.9048 13.7514 11.098 13.8224C11.2912 13.8906 11.4688 13.946 11.6307 13.9886L12.517 14.2273C12.7443 14.2869 12.9972 14.3693 13.2756 14.4744C13.5568 14.5795 13.8253 14.723 14.081 14.9048C14.3395 15.0838 14.5526 15.3139 14.7202 15.5952C14.8878 15.8764 14.9716 16.2216 14.9716 16.6307C14.9716 17.1023 14.848 17.5284 14.6009 17.9091C14.3565 18.2898 13.9986 18.5923 13.527 18.8168C13.0582 19.0412 12.4886 19.1534 11.8182 19.1534C11.1932 19.1534 10.652 19.0526 10.1946 18.8509C9.74006 18.6491 9.3821 18.3679 9.12074 18.0071C8.86222 17.6463 8.71591 17.2273 8.68182 16.75H9.77273C9.80114 17.0795 9.91193 17.3523 10.1051 17.5682C10.3011 17.7812 10.5483 17.9403 10.8466 18.0455C11.1477 18.1477 11.4716 18.1989 11.8182 18.1989C12.2216 18.1989 12.5838 18.1335 12.9048 18.0028C13.2259 17.8693 13.4801 17.6847 13.6676 17.4489C13.8551 17.2102 13.9489 16.9318 13.9489 16.6136C13.9489 16.3239 13.8679 16.0881 13.706 15.9062C13.544 15.7244 13.331 15.5767 13.0668 15.4631C12.8026 15.3494 12.517 15.25 12.2102 15.1648L11.1364 14.858C10.4545 14.6619 9.91477 14.3821 9.51705 14.0185C9.11932 13.6548 8.92045 13.179 8.92045 12.5909C8.92045 12.1023 9.05256 11.6761 9.31676 11.3125C9.58381 10.946 9.94176 10.6619 10.3906 10.4602C10.8423 10.2557 11.3466 10.1534 11.9034 10.1534C12.4659 10.1534 12.9659 10.2543 13.4034 10.456C13.8409 10.6548 14.1875 10.9276 14.4432 11.2741C14.7017 11.6207 14.8381 12.0142 14.8523 12.4545H13.8295Z" fill="none" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 pt-[5px] pb-[7px] dark:group-hover:text-blue-500">Servicios</span>
                    </a>
                    <a href="#Articulos" type="button" className="inline-flex flex-col items-center justify-end px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0C6.46957 0 5.96086 0.210714 5.58579 0.585786C5.21071 0.960859 5 1.46957 5 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0L7 0Z" fill="#636363" />
                            <path d="M13 20C13.5304 20 14.0391 19.7893 14.4142 19.4142C14.7893 19.0391 15 18.5304 15 18V5C15 4.46957 14.7893 3.96086 14.4142 3.58579C14.0391 3.21071 13.5304 3 13 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H13ZM9 5H13V10H9V5ZM4 5H8V6H4V5ZM4 7H8V8H4V7ZM4 9H8V10H4V9ZM4 11H13V12H4V11ZM4 13H13V14H4V13ZM4 15H13V16H4V15Z" fill="#636363" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 pt-[6px] pb-[7px] dark:group-hover:text-blue-500">Articulos</span>
                    </a>
                    {user ? <button className="inline-flex flex-col items-center justify-end px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" onClick={handlerAdd}>
                        <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" fill="#636363"></path>
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 pb-[7px] dark:group-hover:text-blue-500">Add</span>
                    </button>
                    : <button className="inline-flex flex-col items-center justify-end px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" onClick={handlerShare}>
                        <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.8833 12.0083 16.7623 12.025 16.637C12.0417 16.5117 12.0667 16.3993 12.1 16.3L5.05 12.2C4.76667 12.45 4.45 12.646 4.1 12.788C3.75 12.93 3.38333 13.0007 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.38333 7 3.75 7.071 4.1 7.213C4.45 7.355 4.76667 7.55067 5.05 7.8L12.1 3.7C12.0667 3.6 12.0417 3.48767 12.025 3.363C12.0083 3.23833 12 3.11733 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6167 6 14.25 5.92933 13.9 5.788C13.55 5.64667 13.2333 5.45067 12.95 5.2L5.9 9.3C5.93333 9.4 5.95833 9.51267 5.975 9.638C5.99167 9.76333 6 9.884 6 10C6 10.1167 5.99167 10.2377 5.975 10.363C5.95833 10.4883 5.93333 10.6007 5.9 10.7L12.95 14.8C13.2333 14.55 13.55 14.3543 13.9 14.213C14.25 14.0717 14.6167 14.0007 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20Z" fill="#636363" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 pb-[7px] dark:group-hover:text-blue-500">Share</span>
                    </button>}
                </div>
            </div>
        </>
    )
}