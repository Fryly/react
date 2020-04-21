import React from 'react'
import './Button.css'

export default props => {
    return(
        <button className='Button' onClick={props.onClick} >
            Add
        </button>
    )
}