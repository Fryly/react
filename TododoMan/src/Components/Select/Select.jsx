import React from 'react'
import './Select.css'

const SELECT = ["Обычный", "Табличный", "Таблица 2"]

function Select( {select, openSelect, handleClickSelect, handleOpenSelect} ) {

    return (
        <div className="Select-block">
                <div className="Select-view">
                    Вид: {select}
                </div>
                <div className="Select">
                    <span 
                        className="Select-text"
                        onClick={handleOpenSelect}
                    >
                        {select}
                    </span>
                    {
                        openSelect &&
                            <div className="Option">
                                {
                                    SELECT.map( (item, index) => (
                                        <span 
                                            key={index}
                                            onClick={ () => handleClickSelect(item)}
                                        >
                                            {item}
                                        </span>
                                    ))
                                }
                            </div>
                    }
                </div>
        
        </div>
    )
}

export default Select
