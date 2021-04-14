import React from 'react'

import { Input, Button } from '../index';

import './Popup.css'

function PopupTask({ 
            onClickClose, 
            onAddTask, 
            handleInputChange, 
            ModalRef, 
            nameText, 
            text, 
            description, 
            deadline 
        }) {

    return (
        <div className="Popup-background">
            <div className="Popup-task" ref={ModalRef}>
                <h2>{ nameText }</h2> 
                <Input type='text' name='text' placeholder='Новая задача' onValueFolder={handleInputChange} value={text}/>
                <Input type='text' name='description' placeholder='Описание' onValueFolder={handleInputChange} value={description}/>
                <Input type='date' name='deadline' onValueFolder={handleInputChange} value={deadline}/>
                <div className="Button-task">
                    <Button className='Add-task' onClick={onAddTask}> 
                        { nameText } 
                    </Button>
                    <Button className='Сlose-popup_task' onClick={onClickClose}> 
                        Отмена
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PopupTask
