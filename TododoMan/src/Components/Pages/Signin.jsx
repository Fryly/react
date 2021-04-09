import React, {useState, useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { Input, Button } from '../index';
import './Page.css'

function Signin() {
    const [form, setForm] = useState({
        name: '',
        password: ''
    })
    const [e, setE] = useState('')

    const auth = useContext(AuthContext)

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const loginHandler = () => {
        axios.post('http://localhost:3001/users/login', {...form})
                .then(({data}) => {
                    auth.login(data.token)
                })
                .catch(err => {
                    const error = err.response.data.message
                    setE(error)
                })
        }


    return (
        <div className="singin">
            <div className="form">
                <h2>Singin</h2>
                <Input type='text' placeholder='Name' name='name' onValueFolder={changeHandler}/>
                <Input type='password' placeholder='Password' name='password' onValueFolder={changeHandler}/>
                <Button 
                    className='Btn-submit'
                    onClick={loginHandler}
                >
                    Singin
                </Button>
                {
                    e &&
                    <div className='Error'>
                        {e}
                    </div>
                }
            </div>
        </div>
    )
}

export default Signin
