import React from 'react';
import './Header.css';

export default props => {
    return (
        <header>
            <p className='Logo-name'>{props.Logotext}</p>
        </header>
    )
}

