import { useSelector } from 'react-redux'
import { useState } from 'react'



export const useForm = () => {

    const { error, token } = useSelector(( { users } ) => users)
    const [form, setForm] = useState({
        name: '',
        password: ''
    })

    const changeHandler = ( event ) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return { form, changeHandler, error, token  }
}