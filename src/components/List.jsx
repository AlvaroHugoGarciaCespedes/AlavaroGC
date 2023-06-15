'use client';
import { removeData } from '@/firebase/database';
import { useUser } from '@/context/Context'

export default function Button({ styled, children }) {
    const { user, userDB, item, setUserItem, setUserModal, setUserProfile, setUserSuccess, success, setUserData } = useUser()

    function handlerRemoveData() {
        removeData(`articles/${item}`, setUserData, setUserSuccess)
    }

    function handlerEditData() {
        setUserModal('Articles')
        setUserItem(i)
    }

    return (
        <>
            <li className={`block mb-2 text-sm text-left font-light text-gray-900 shadow-[0px_0px_3px_0.1px_#00A582] px-5`}>{children}</li>

           {user && <div className='flex'>
                <Button theme='Danger' click={handlerRemoveData}>Eliminar</Button>
                <Button theme='Secondary' click={handlerEditData}>Editar</Button>
            </div>}

        </>
    )
}   