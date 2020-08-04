import React from 'react'
import './Button.css'
import classNames from 'classnames';


const Button = ({ onClick, className, children }) => {
    return (
        <button
            onClick={onClick}
            className={classNames('Button', className)}>
            {children}
        </button>
    )
}

export default Button
