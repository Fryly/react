import {useState, useCallback, useEffect } from 'react'
import jwt from "jwt-decode";

const storageName = 'auth-token'

export const useAuth = () => {
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [isLoad, setLoad] = useState(false);

    const login = useCallback( ( jwtToken, id ) => {
        let data = {
            data: jwt(jwtToken),
            token: jwtToken
        }
        setName(data.data.name)
        setUserId(id)
        localStorage.setItem(storageName, JSON.stringify(data))
        setLoad(true)
    }, [])

    const logout = useCallback( () => {
        setUserId(null)
        setName(null)
        setLoad(false)
        localStorage.removeItem(storageName)
    }, [])

    useEffect( () => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login( data.token, data.data._id)
        }
    }, [login])

    return { login, logout, userId, name, isLoad }
}