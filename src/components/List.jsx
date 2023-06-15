'use client';
import { removeData } from '@/firebase/database';
import { useUser } from '@/context/Context'
import Button from '@/components/Button'

export default function List({ styled, children }) {
    const { user, userDB, item, setUserItem, setUserModal, setUserProfile, setUserSuccess, success, setUserData } = useUser()

    function handlerRemoveData() {
        removeData(`articles/${item}`, setUserData, setUserSuccess)
    }

    function handlerEditData() {
        setUserModal('Articulos')
        setUserItem(i)
    }

    return (
        <>
            <li className={`block mb-2 text-sm text-left font-light text-gray-900 shadow-[0px_0px_3px_0.1px_#00A582] px-5`}>{children}</li>

            {user && <div className='grid grid-cols-2 gap-1 lg:gap-5'>
                <Button theme='Danger' click={handlerRemoveData}>Eliminar</Button>
                <Button theme='Secondary' click={handlerEditData}>Editar</Button>
            </div>}

        </>
    )
}   