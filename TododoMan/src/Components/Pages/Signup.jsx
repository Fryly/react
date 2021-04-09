import React, {useState} from 'react'
import axios from 'axios'
import { Input, Button } from '../index';
import './Page.css'

function Signup() {

    const headers = {
        'Content-Type': 'application/json',
    }
    const [form, setForm] = useState({
        name: '',
        password: ''
    })
    const [e, setE] = useState('')


    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    
    const registerHandler = () => {
        axios.post('http://localhost:3001/users/register', {...form}, headers)
                .then((res) => {})
                .catch((err) => {
                    const error = err.response.data.message
                    setE(error)
                })
        }

    return (
        <div className="singup">
            <div className="form">
                <h2>Singup</h2>
                <Input type='text' placeholder='Name' name='name' onValueFolder={changeHandler}/>
                <Input type='password' placeholder='Password' name='password' onValueFolder={changeHandler}/>
                <Button 
                    className='Btn-submit'
                    onClick={registerHandler}
                >
                    Singup
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

export default Signup
