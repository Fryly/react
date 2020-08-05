import React from 'react'
import './Cart.css'
import Cor from '../assets/cor.png'
import Cartbg from '../assets/bgcart.png'
import Cartitem from '../Component/Cartitem/Cartitem'
import { useSelector, useDispatch } from 'react-redux'

import { clearCart, removeCartItem, minusItem, plusItem } from '../redux/actions/cart'
import { Link } from 'react-router-dom'

const Cart = () => {

    const dispatch = useDispatch()

    const {items, totalCount, totalPrice} = useSelector(({ cart }) => cart ) 
    const addPizzas = Object.keys(items).map(key => {
        return items[key].items[0]
    });

    const onClearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')){
            dispatch(clearCart())
        }
    }

    const onRemoveItem = (id) => {
        if (window.confirm('Вы действительно хотите удалить?')){
            dispatch(removeCartItem(id))
        }
    }

    const onMinusItem = (id) => {
        dispatch(minusItem(id))
    }

    const onPlusItem = (id) => {
        dispatch(plusItem(id))
    }

    return (
        <div className="Content__cart">
            {
                totalCount ? (
                    <> 
                    <div className="Content__cart-top">
                        <div className="Content__title">
                            <img src={Cor} alt=""/>
                            <h2>
                                Корзина
                            </h2>
                        </div>
                <div className="Cart__clear" onClick={onClearCart}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>
                        Очистить корзину
                    </p>
                </div>
            </div>
            {
                addPizzas.map((obj,index) => <Cartitem 
                    key={index}
                    id={obj.id}
                    name={obj.name} 
                    type={obj.type} 
                    size={obj.sizes}
                    totalPrice={items[obj.id].totalPrice}
                    totalCount={items[obj.id].items.length}
                    image={obj.imageUrl}
                    onClickRemove={onRemoveItem}
                    onMinus={onMinusItem}
                    onPlus={onPlusItem}
                    />)
            }
            
            <div className="Cart__bottom">
                <div className="Cart__bottom-details">
                    <span> Всего пицц: <b>{totalCount}</b> </span>
                    <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                </div>
              <div className="Cart__bottom-buttons">
                <Link to="/" className="Button">
                  <span>Вернуться назад</span>
                </Link>
                <div className="Button pay-btn">
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
            </>
                ) : (
                    <div className="Cart cart--empty">
                        <h2>Корзина пустая <i>😕</i></h2>
                        <p>
                        Вероятней всего, вы не заказывали ещё пиццу.<br />
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
                        </p>
                        <img src={Cartbg} alt="Empty cart" />
                        <Link to="/" className="Button ">
                        <span>Вернуться назад</span>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}


export default Cart