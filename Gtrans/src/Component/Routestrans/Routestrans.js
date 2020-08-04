import React from 'react'
import './Routestrans.css'
import { NavLink } from 'react-router-dom'


const routersTrans = [
    { name:'автобусы', type:'bus' },
    { name:'троллуйбусы', type:'trolleybus'}, 
    { name:'маршрутные такси', type:'taxi'}
]

function Routestrans() {



    return (
            <div className="Routestrans">
                <ul>
                    <p>Маршруты и расписания:</p>
                    {
                        routersTrans &&
                        routersTrans.map(( obj,index )=>(
                                <li
                                    key={index}

                                >
                                    <NavLink to={`/${obj.type}`} activeStyle={{
                                        fontWeight: "bold",
                                        color: "#027dc5"
                                    }} exact>
                                        {obj.name}
                                    </NavLink>
                                </li>
                        ))
                    }
                </ul>
            </div>
    )
}

export default Routestrans