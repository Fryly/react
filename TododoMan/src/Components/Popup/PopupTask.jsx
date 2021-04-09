import React from 'react'

import { Input, Button } from '../index';

import './Popup.css'

function PopupTask({onClickClose, onAddTask}) {

    const [text, setText] = React.useState('')

    const handleInputChange = (event) =>{
        const value = event.currentTarget.value;
        setText(value);
    }

    const addNewTask = () =>{
        if(text){
            onAddTask(text)
            setText('')
        }
    }

    return (
        <div className="Popup-task"> 
             <Input placeholder='Новая задача' onValueFolder={handleInputChange} value={text}/>
             <div className="Button-task">
                <Button className='Add-task' onClick={addNewTask}> 
                    Добавить задачу
                </Button>
                <Button className='Сlose-popup_task' onClick={onClickClose}> 
                    Отмена
                </Button>
             </div>
        </div>
    )
}

export default PopupTask
