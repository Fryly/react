import React from 'react'
import './Popup.css'
import Close from '../../assets/Close.png'

export default props => {
    const date = new Date( Date.parse(props.end) ).toLocaleString().slice(0,-10);
       return (
                <div className="Popup-background">
                    <div className="Popup-info">
                        <h2 style={{ color : props.color }}>Событие {props.title}</h2> 
                        <p>Описание: {props.description}</p>
                        <p>Дедлайн: {date.toString()}</p>
                        <img src={Close} alt="close" className="close" onClick={props.close}/>
                    </div>
                </div>
       )
}
