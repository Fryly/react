import React from 'react'
// import classesName from './Header.css'
import './Header.css'
import Img from './../assets/pen.png'

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