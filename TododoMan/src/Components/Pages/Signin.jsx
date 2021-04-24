import React, {useState, useContext, useEffect} from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Input, Button } from '../index';
import { featchLogin } from '../../redux/actions/users'
import { useSelector, useDispatch } from 'react-redux'
import './Page.css'

function Signin() {
    const [form, setForm] = useState({
        name: '',
        password: ''
    })
    const dispatch = useDispatch();
    const { error, token } = useSelector(( { users } ) => users)
    const authFlag = !!token
    const auth = useContext(AuthContext) 

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const loginHandler = () => {
        dispatch(featchLogin(form))
    }
    
    useEffect( () => {
        if( authFlag ){
            auth.login(token.token)
        }
      },[authFlag, auth, token.token])

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