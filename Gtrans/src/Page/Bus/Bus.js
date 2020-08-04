import React from 'react'
import './Bus.css'
import Tabletime from '../../Component/Tabletime/Tabletime'
import Routestrans from '../../Component/Routestrans/Routestrans'

function Bus() {
    return (
        <div className="Bus">
            <h2>Расписание автобусов Гомеля</h2>
            <Routestrans/>
            <Tabletime/>
        </div>
    )
}

export default Bus