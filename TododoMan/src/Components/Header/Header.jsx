import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'
import './Header.css'
import { Link } from 'react-router-dom'

function Header( logginIn ) {

    const auth = useContext(AuthContext)
    const logoutHendler = () => {
        auth.logout()
    }
    return (
        <div className='Header'>
            <h1>TododoMan</h1>
            {
                !logginIn.logginIn 
                ? <div className="authentication">
                    <Link to="/login">Login</Link>
                    <Link to="/registration">Registration</Link> 
                  </div>
                : <span className="Out" onClick={logoutHendler}>
                    Logout
                 </span>
            }
        </div>
    )
}

export default Header
