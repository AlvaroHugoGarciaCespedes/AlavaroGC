'use client';
import { useUser } from '@/context/Context'

import {useState} from 'react'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { removeData } from '@/firebase/database';

export default function CardH({ image, service, description, remote, cost, time, i, index }) {

    const { user, userDB, item, setUserItem, setUserModal, setUserProfile, setUserSuccess, success, setUserData } = useUser()

    function handlerRemoveData() {
        removeData(`services/${item}`, setUserData, setUserSuccess)
    }

    function handlerEditData() {
        setUserModal('Servicios')
        setUserItem(i)
    }


    return (
        <>
            <div class="w-full lg:max-w-full  md:flex lg:flex-around rounded-[15px]  overflow-hidden mt-5">
                <div class="h-48 w-full bg-cover rounded-t text-center md:hidden" style={{ backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                {index % 2 == 0
                    ? <div class="hidden md:inline-block h-48 lg:h-auto w-[50%] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center " style={{ backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    </div>
                    : ''}
                <div class=" p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                        <div class=" font-bold text-xl mb-2 text-[#00A582]">
                            {service}
                            <p class="w-full text-sm text-gray-600 flex items-center justify-end text-right font-normal">
                                <span className={`inline-block h-[5px] w-[5px] mr-[5px] rounded-[5px] ${remote ? 'bg-[#00A582]' : 'bg-gray-500'}`}>
                                </span> {remote ? 'Servicio prenecial y remoto' : 'Servicio presencial unicamente'}
                            </p>
                        </div>
                        <p class="text-gray-700 text-base">{description}</p>
                    </div>
                    <div class="flex items-center">
                        {/* <img class="w-10 h-10 rounded-full mr-4" src={image} alt="Avatar of Jonathan Reinink" /> */}
                        <div class="text-sm">
                            <p class="text-gray-900 leading-none">Tiempo de entrega</p>
                            <p class="text-gray-600">{time}</p>
                        </div>
                    </div>
                    <div class="flex items-baseline text-gray-900 dark:text-white">
                        <span class="text-3xl font-semibold">BOB</span>
                        <span class="text-5xl font-extrabold tracking-tight">{cost}</span>
                        <Button theme='Primary'>Solicitar Servicio</Button>

                    </div>
                </div>
                {index % 2 == 1
                    ? <div class="hidden md:inline-block h-48 lg:h-auto w-[50%] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center " style={{ backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    </div>
                    : ''
                }
            </div>
            {user && <div className='flex'>
                <Button theme='Danger' click={handlerRemoveData}>Eliminar</Button>
                <Button theme='Secondary' click={handlerEditData}>Editar</Button>
            </div>}
        </>

    )
}   