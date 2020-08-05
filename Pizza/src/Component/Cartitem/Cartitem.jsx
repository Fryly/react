import React from 'react'
import './Cartitem.css'
import Minus from '../../assets/plus.png'
import Plus from '../../assets/minus.png'
import Delete from '../../assets/delet.png'


function Cartitem( {name, type, size, totalPrice, image, totalCount, onClickRemove, id, onMinus, onPlus} ) {
    const handleRemoveClick = () => {
        onClickRemove(id)
    }

    const handleMinusClick = () => {
        onMinus(id)
    }

    const handlePlusClick = () => {
        onPlus(id)
    }

    return (
        <div className="Content__cart-items">
                <div className="Cart__img">
                    <img
                        className="Pizza-block__img"
                        src={image}
                        alt="Pizza"
                        />
                    <div className="Cart__item-info">
                        <h3>{name}</h3>
                        <p>{type} тесто, {size} см.</p>
                    </div>
                </div>
                <div className="Cart__item-count">
                        <div className="Cart__item-count-minus" onClick={handleMinusClick}>
                            <img src={Minus} alt=""/>
                        </div>
                        <b>{totalCount}</b>
                        <div className="Cart__item-count-minus" onClick={handlePlusClick}>
                            <img src={Plus} alt=""/>
                        </div>
                </div>
                <div className="Cart__item-price">
                    <b>{totalPrice} ₽</b>
                </div>
                <div className="Cart__item-remove" onClick={handleRemoveClick}>
                    <img src={Delete} alt=""/>
                </div>
            </div>
    )
}

export default Cartitem
