import React from 'react'
import './Weatheritem.css'
import Del from '../../assets/del.svg'

function Weatheritem({items, onClickDelet}) {

    const iconUrl = "http://openweathermap.org/img/w/" + items.weather[0].icon + ".png"
    let celsius = Math.floor(( items.main.temp - 273 ));
    return (
        <div className='Weatheritem'>
            <div className="Weather-text">
                <h2>{items.name}</h2>
                <p className="Summary">{items.weather[0].description}</p>
                <p>Temperature:<span>{celsius}°C</span></p>
            </div>
            <div className="Weather-icon">
                <img src={iconUrl} alt=""/>
            </div>
            <div className="Delete" onClick={onClickDelet}>
                <img src={Del} alt="#"/>
            </div>
        </div>
    )
}

export default Weatheritem
