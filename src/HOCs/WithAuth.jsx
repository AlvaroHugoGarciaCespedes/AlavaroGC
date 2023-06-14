'use client'

import Loader from '@/components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/Context.js'
import { getUserData} from '@/firebase/database'
import { onAuth } from '@/firebase/database'



export function WithAuth(Component) {
    return () => {
        const { user, userDB, setUserProfile, setUserData } = useUser()
        const router = useRouter()

        useEffect(() => {
            if(user === undefined) onAuth(setUserProfile)
            if(userDB == undefined || userDB == null) getUserData( setUserData ) 
            if(user === null) router.push('/')
        }, [user, userDB])
        
        return (
            <>
                {user === undefined && <Loader />}
                {userDB && <Component {...arguments} />}
            </>
        )
    }
}