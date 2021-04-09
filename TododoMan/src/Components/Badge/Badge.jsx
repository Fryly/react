import React from 'react'
import classNames from 'classnames';
import './Badge.css'

function Badge({onClick, className, color}) {
    return (
        <div
            onClick={onClick}
            className={classNames('Badge', { [`Badge--${color}`]: color }, className)}
        >
            
        </div>
    )
}

export default Badge
