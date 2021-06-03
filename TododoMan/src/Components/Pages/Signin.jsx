import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Input, Button } from '../index';
import { featchLogin } from '../../redux/actions/users'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/form.hook';
import './Page.css'

function Signin() {
    const dispatch = useDispatch();
    const { form, changeHandler, error, token } = useForm();
    const authFlag = !!token
    const auth = useContext(AuthContext) 

    const loginHandler = () => {
        dispatch(featchLogin(form))
    }
    
    useEffect( () => {
        if( authFlag ){
            auth.login(token)
        }
      },[authFlag, auth, token])

    return (
        <div className="singin">
            <div className="form">
                <h2>Signin</h2>
                <Input type='text' placeholder='Name' name='name' onValueFolder={changeHandler}/>
                <Input type='password' placeholder='Password' name='password' onValueFolder={changeHandler}/>
                <Button 
                    className='Btn-submit'
                    onClick={loginHandler}
                >
                    Singin
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

export default Signin