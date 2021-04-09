import React from 'react'
import './Input.css'

function Input({placeholder, onValueFolder, value, name, type}) {
    return (
        <div className='Input'>
            <input type={type} placeholder={placeholder} onChange={onValueFolder} value={value} name={name}/>
        </div>
    )
}

export default Input
