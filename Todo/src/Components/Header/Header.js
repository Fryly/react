import React from 'react'
import './Header.css'
import Img from './../../assets/pen.png'

export default props =>
    <header className='Header'>
        <div className='Top-line'>
            {props.Text}
            <img 
                 src={Img} 
                 alt ='#'
            />
        </div>
    </header>