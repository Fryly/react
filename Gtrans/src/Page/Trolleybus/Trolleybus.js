import React from 'react'
import './Trolleybus.css'
import Tabletime from '../../Component/Tabletime/Tabletime'
import Routestrans from '../../Component/Routestrans/Routestrans'

function Trolleybus() {
    return (
        <div className="Trolleybus">
            <h2>Расписание траллейбусов Гомеля</h2>
            <Routestrans/>
            <Tabletime/>
        </div>
    )
}

export default Trolleybus