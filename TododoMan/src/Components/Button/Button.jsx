import React from 'react'
import './Button.css'
import classNames from 'classnames';

function Button({ onClick, className, children }) {
    return (
        <button
            className={classNames('Button', className)}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
