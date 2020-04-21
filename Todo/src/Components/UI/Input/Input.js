import React from 'react'
import './Input.css'

export default props => {
    return(
            <input
                className='Input'
                type='text'
                onChange={props.onChangeText}
                placeholder='Add to the list'
                value={props.valueText}
            />
    )
}