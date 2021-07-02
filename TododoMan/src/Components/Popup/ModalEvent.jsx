import React from 'react'
import { Input, Button } from '../index';
import './Popup.css'
import { buttonName } from '../Util/Constants'






export default props => {

       return (
                <div className="Popup-background">
                    <div className="Popup-task">
                        <h2>{buttonName.addEvent}</h2> 
                        <Input type='text' name='text' placeholder='Новое событие' onValueFolder={props.handleInputChange}/>
                        <Input type='text' name='description' placeholder='Описание' onValueFolder={props.handleInputChange}/>
                        <Input type='date' name='deadline' onValueFolder={props.handleInputChange} />
                        <div className="Button-task">
                            <Button className='Add-task' onClick = {props.addEvent}> 
                                {buttonName.addEvent}
                            </Button>
                            <Button className='Сlose-popup_task' onClick = {props.close}> 
                                Отмена
                            </Button>
                        </div>
                    </div>
                </div>
       )
}
