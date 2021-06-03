import axios from 'axios'


export const setToken = ( token ) => ({
    type: 'SET_TOKEN',
    payload: token,
})

export const setName = ( name ) => ({
    type: 'SET_NAME',
    payload: name,
})

export const setUserId = ( id ) => ({
    type: 'SET_ID',
    payload: id,
})

export const setLoad = ( load ) => ({
    type: 'SET_LOAD',
    payload: load,
})

export const setError = ( error ) => ({
    type: 'SET_ERROR',
    payload: error
})


export const featchRegister = ( form, headers, history ) => ( dispatch ) => {

    axios.post('http://localhost:3001/users/register', {...form}, headers)
                .then((res) => {
                    alert('Спасибо за регистрацию')
                    dispatch( setError('') )
                    history.push('/login')
                })
                .catch((err) => {
                    const error = err.response.data.message
                    dispatch( setError(error) )
                })
}

export const featchLogin = ( form ) => ( dispatch ) => {
        axios.post('http://localhost:3001/users/login', {...form})
                .then(({data}) => {
                    dispatch( setToken(data.token) )
                })
                .catch(err => {
                    const error = err.response.data.message
                    dispatch( setError(error) )
                })
}

