'use client';
import { useUser } from '@/context/Context'

import { useState } from 'react'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { removeData } from '@/firebase/database';
import Link from 'next/link';

export default function CardH({ image, service, description, remote, cost, time, whatsapp, i, index }) {

    const { user, userDB, item, setUserItem, setUserModal, setUserProfile, setUserSuccess, success, setUserData } = useUser()

    function handlerRemoveData() {
        removeData(`services/${i}`, setUserData, setUserSuccess)
    }

    function handlerEditData() {
        setUserModal('Servicios')
        setUserItem(i)
    }


    return (
        <>
            <div className="w-full lg:max-w-full  md:flex lg:flex-around rounded-[15px]  overflow-hidden mt-5">
                <div className="h-48 w-full bg-cover rounded-t text-center md:hidden" style={{ backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                {index % 2 == 0
                    ? <div className="hidden md:inline-block h-48 lg:h-auto w-[50%] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center " style={{ backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    </div>
                    : ''}
                <div className="px-2 py-4 md:p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className=" font-bold text-xl mb-2 text-[#00A582]">
                            {service}
                            <p className="w-full text-sm text-gray-600 flex items-center justify-end text-right font-normal">
                                <span className={`inline-block h-[5px] w-[5px] mr-[5px] rounded-[5px] ${remote ? 'bg-[#00A582]' : 'bg-gray-500'}`}>
                                </span> {remote ? 'Servicio prenecial y remoto' : 'Servicio presencial unicamente'}
                            </p>
                        </div>
                        <p className="text-gray-700 text-base">{description}</p>
                    </div>
                    <div className="flex items-center">
                        {/* <img className="w-10 h-10 rounded-full mr-4" src={image} alt="Avatar of Jonathan Reinink" /> */}
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">Tiempo de entrega</p>
                            <p className="text-gray-600">{time}</p>
                        </div>
                    </div>
                    <div className="flex items-baseline justify-between text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">BOB</span>
                        <span className="text-5xl font-extrabold tracking-tight mr-[5px] lg:mr-[20px]">{cost}</span>
                        <Link href={`https://api.whatsapp.com/send?phone=${whatsapp}&text=Hola%20Alvaro`}>
                            <Button theme='Primary'>Solicitar Servicio</Button>
                        </Link>


                    </div>
                </div>
                {index % 2 == 1
                    ? <div className="hidden md:inline-block h-48 lg:h-auto w-[50%] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center " style={{ backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    </div>
                    : ''
                }
            </div>
            {user && <div className='grid grid-cols-2 gap-1 lg:gap-5'>
                <Button theme='Danger' click={handlerRemoveData}>Eliminar</Button>
                <Button theme='Secondary' click={handlerEditData}>Editar</Button>
            </div>}
        </>

    )
}   