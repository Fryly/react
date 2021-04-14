import {useState, useCallback, useEffect } from 'react'
import jwt from "jwt-decode";

const storageName = 'auth-token'

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [isLoad, setLoad] = useState(false);

    const login = useCallback( ( jwtToken, id ) => {
        let data = {
            data: jwt(jwtToken),
            token: jwtToken
        }
        setToken(data.token)
        setName(data.data.name)
        setUserId(id)
        localStorage.setItem(storageName, JSON.stringify(data))
        setLoad(true)
    }, [])

    const logout = useCallback( () => {
        setToken(null)
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

    return { token, login, logout, userId, name, isLoad }
}