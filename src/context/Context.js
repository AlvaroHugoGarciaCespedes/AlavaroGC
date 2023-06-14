'use client'
   

import React, { useState, useMemo, useContext } from 'react'

const UserContext = React.createContext()

export function UserProvider({ children }) {

	const [user, setUser] = useState(undefined)
	const [userDB, setUserDB] = useState(undefined)
	const [modal, setModal] = useState(false)
	const [item, setItem] = useState(undefined)
	const [success, setSuccess] = useState('')

	const setUserProfile = (data) => {
		setUser(data)
	}
	const setUserData = (data) => {
		setUserDB(data)
	}
	const setUserModal = (data) => {
		setModal(data)
	}
	const setUserItem = (data) => {
		setItem(data)
	}
	const setUserSuccess = (data) => {
		setSuccess(data)
	}

	const value = useMemo(() => {
		return ({
			user,
			userDB,
			modal,
			item,
			success,
			setUserProfile,
			setUserData,
			setUserModal,
			setUserSuccess,
			setUserItem
		})
	}, [user, userDB, success, modal, item])

	return (
		<UserContext.Provider value={value} >
			{children}
		</UserContext.Provider>
	)
}

export function useUser() {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('error')
	}
	return context
}