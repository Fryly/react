import React from 'react'
import './Sidebar.css'
import Add from './../../assets/plus.png'
import { ListFolder, Popup, Button } from '../index';
import { useAuth } from '../../hooks/auth.hook';
import { useDispatch, useSelector } from 'react-redux'
import { featchColor } from '../../redux/actions/color'



function Sidebar({ folder, handleDeleteFolder, handleAddFolder, idFolder}) {
    const dispatch = useDispatch();
    const [visiblePopup, setVisiblePop] = React.useState(false)
    const { name } = useAuth();
    const { color } = useSelector(( { color } ) => color );

    React.useEffect(()=>{
        dispatch(featchColor())
    },[])

    const handlePopup = () => {
        setVisiblePop(!visiblePopup)
    }
    
    const handleAdd = (addFolder,addColor) => {
        const obj = {
            id: idFolder,
            name: addFolder,
            colorName: addColor,
            tasks: []
        } 
        handleAddFolder(obj)
    }
    
    return (
        <div className="Todo-sidebar">
            <span>Hi, {name}</span>
            <div className="Todo-sidebar__content">
                {
                    folder.length > 0
                        ? <ListFolder 
                            items={folder}
                            onClickDelete={handleDeleteFolder}
                        /> 
                        : []
                }
            </div>
            <div className="Pop-button__content">
                <Button className='Button-open' onClick={handlePopup}>
                    <img src={Add} alt="ADD"/> 
                    Добавить папку
                </Button>
                {
                    visiblePopup 
                    && <Popup 
                            ClosePopUp={visiblePopup} 
                            setClosePopUp={setVisiblePop} 
                            onClickAdd={handleAdd}
                            colorItem={color}
                        />
                }
            </div>
        </div>
    )
}

export default Sidebar
