import React from 'react'
import './Popup.css'
import Button from '../Button/Button'


function Popup({popup, onClickClose, onClickAdd}) {
    const [text, setText] = React.useState('')

    function handleInputChange(event){
        const value = event.currentTarget.value;
        setText(value);
    }

    function addCity(){
        if(text){
            onClickAdd(text)
            setText('');
        }
    }
    return (
        <div className="Popup">
            <div className="Popup-block" ref={popup}>
                <p>City</p>
                <div className="Popup-block__input">
                    <input type="text" onChange={handleInputChange} value={text}/>
                </div>
                <div className="Popup-block__button">
                    <Button onClick={onClickClose}>
                        Close
                    </Button>
                    <Button onClick={addCity}>
                        Ok
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Popup
