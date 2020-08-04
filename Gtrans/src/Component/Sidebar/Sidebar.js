import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const transport = [
    { name:'Автобусы', type:'bus' },
    { name:'Троллуйбусы', type:'trolleybus'}, 
    { name:'Маршрутные такси', type:'taxi'}
]

function Sidebar() {

    return (
        <div className="Sidebar">
            <ul>
                <li>
                    <NavLink to="/"
                    activeStyle={{
                        color: "#027dc5"
                    }}
                    exact
                    >
                        Главная
                    </NavLink>
                </li>
                {
                    transport &&
                    transport.map((obj, index) => (
                            <li
                                key={index}
                            >
                            <NavLink to={`/${obj.type}`}
                                activeStyle={{
                                    color: "#027dc5"
                                }}
                                exact
                            >
                                {obj.name} 
                            </NavLink>
                            </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar