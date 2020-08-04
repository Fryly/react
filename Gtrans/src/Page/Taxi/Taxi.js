import React from 'react'
import './Taxi.css'
import Tabletime from '../../Component/Tabletime/Tabletime'
import Routestrans from '../../Component/Routestrans/Routestrans'

function Taxi() {
    return (
        <div className="Taxi">
            <h2>Расписание маршрутных такси Гомеля</h2>
            <Routestrans/>
            <Tabletime/>
        </div>
    )
}

export default Taxi