import React from 'react'
import { Input, Button } from '../index';
import './Popup.css'






export default props => {

       return (
                <div className="Popup-background">
                    <div className="Popup-task" ref={props.ModalRef}>
                        <h2>Добавить событие</h2> 
                        <Input type='text' name='text' placeholder='Новое событие' onValueFolder={props.handleInputChange}/>
                        <Input type='text' name='description' placeholder='Описание' onValueFolder={props.handleInputChange}/>
                        <Input type='date' name='deadline' onValueFolder={props.handleInputChange} />
                        <div className="Button-task">
                            <Button className='Add-task' onClick = {props.addEvent}> 
                                Добавить событие
                            </Button>
                            <Button className='Сlose-popup_task' onClick = {props.close}> 
                                Отмена
                            </Button>
                        </div>
                    </div>
                </div>
       )
}
