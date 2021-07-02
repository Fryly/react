import React from 'react'
import './Popup.css'

import { Badge, Input, Button } from '../index';
import { buttonName } from '../Util/Constants'

import Close from '../../assets/Close.png'

function Popup({ClosePopUp, setClosePopUp, onClickAdd, colorItem}) {

    const [text, setText] = React.useState('')
    const [colorBadge, setColorBadge] = React.useState("")
    const [selectColor, setSelectColor] = React.useState(0);

    const handleclose = () =>{
        setClosePopUp(!ClosePopUp)
    }

    const handleInputChange = (event) =>{
        const value = event.currentTarget.value;
        setText(value);
    }

    const handleSelect = (idBadge, colorBadge) => {
        const color = colorBadge;
        const id = idBadge;
        setSelectColor(id)
        setColorBadge(color)

    }

    const addNewFolder = () =>{
        if(text){
            onClickAdd(text,colorBadge)
            setText('')
            
        }
        alert(`Папка ${text} добавлена`)
    }

    return (
        <div className="Popup">
            <div className="Popup-close" onClick={handleclose}>
                <img src={Close} alt="close"/>
            </div>
            <Input placeholder='Название папки' onValueFolder={handleInputChange} value={text}/>
            <div className="Color-list">
                {
                    colorItem.map((item,_) => (
                        <Badge
                            key={item.id}
                            onClick={()=>handleSelect(item.id,item.name)}
                            color={item.name}
                            className={selectColor === item.id ? 'Active-badge' : ''}
                        />
                    ))
                }
            </div>
            <Button className='Add-folder' onClick={addNewFolder}> 
                {buttonName.addFolder}
            </Button>
        </div>
    )
}
export default Popup
