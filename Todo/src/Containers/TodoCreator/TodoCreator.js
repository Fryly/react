import React from 'react'
import './TodoCreator.css'
import Input from '../../Components/UI/Input/Input'
import Button from '../../Components/UI/Button/Button'

export default props => {
    
    return(
        <div className='TodoCreator'>
            <Input onChangeText={props.onAddInput} valueText={props.textValue}/>
            <Button onClick={props.onAnnouncing}/>
        </div>
    )
}
