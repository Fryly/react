import React from 'react'
import { Input, Button } from '../index';
import './Page.css'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux'
import { featchRegister} from '../../redux/actions/users'
import { useForm } from '../../hooks/form.hook';



function Signup() {

    const headers = { 'Content-Type': 'application/json' }
    const dispatch = useDispatch();
    const history = useHistory();
    const { form, changeHandler, error } = useForm();

    const registerHandler = () => {
        dispatch(featchRegister( form, headers, history ))
    }   

    return (
        <div className="singup">
            <div className="form">
                <h2>Signup</h2>
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
