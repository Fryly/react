import React, { useState } from 'react'
import { Input, Button } from '../index';
import './Page.css'
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import { featchRegister} from '../../redux/actions/users'



function Signup() {

    const headers = {
        'Content-Type': 'application/json',
    }
    const dispatch = useDispatch();
    const { error } = useSelector(( { users } ) => users)
    const [form, setForm] = useState({
        name: '',
        password: ''
    })
    const history = useHistory();

    const changeHandler = ( event ) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = () => {
        dispatch(featchRegister( form, headers, history ))
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
                    error &&
                    <div className='Error'>
                        {error}
                    </div>
                }
            </div>
        </div>
    )
}

export default Signup
