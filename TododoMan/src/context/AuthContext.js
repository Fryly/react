import { createContext } from 'react'

function noop() {}

export const AuthContext = createContext({
    userId: '',
    name: '',
    login: noop,
    logout: noop,
    token: null,
    isLoad: false
})