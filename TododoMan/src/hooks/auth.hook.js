import { useState, useCallback, useEffect } from 'react'
import jwt from "jwt-decode";
import { useSelector, useDispatch } from 'react-redux'
import { setName, setUserId, setToken } from '../redux/actions/users'

const storageName = 'auth-token'

export const useAuth = () => {

    const dispatch = useDispatch();
    const { name, userId } = useSelector(( { users } ) => users)
    const [isLoad, setLoad] = useState(false);

    const login = useCallback( ( jwtToken, id ) => {
        let data = {
            data: jwt(jwtToken),
            token: jwtToken
        }
        dispatch(setName(data.data.name))
        dispatch(setUserId(id))
        localStorage.setItem(storageName, JSON.stringify(data))
        setLoad(true)
    }, [dispatch])

    const logout = useCallback( () => {
        dispatch(setToken(null))
        dispatch(setUserId(null))
        dispatch(setName(''))
        setLoad(false)
        localStorage.removeItem(storageName)
    }, [dispatch])

    useEffect( () => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login( data.token, data.data._id)
        }
    }, [login])

    return { login, logout, userId, name, isLoad }
}