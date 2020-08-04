import React, { useState } from 'react';
import './Pizzablock.css'
import classNames from 'classnames';
import PropTypes from 'prop-types'
import Button from '../Button/Button'

const Pizzablock = ( { id, name, imageUrl, price, types, sizes, onClickAddPizza } ) => {
    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40];

    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(0)


    const onSelectType = (index) => {
        setActiveType(index)
    }

    const onSelectSize = (index) => {
        setActiveSize(index)
    }

    const handlePizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            sizes: availableSizes[activeSize],
            type: availableTypes[activeType]
        }
        onClickAddPizza(obj)
    }

    return (
        <div className='Pizza-block'>
            <img
                className='Pizza-block__img'
                src= {imageUrl}
                alt="Pizza"
            />
            <h4 className='Pizza-block__title'>{name}</h4>
            <div className='Pizza-block__selector'>
                <ul>
                    {
                        availableTypes.map((type, index) => (
                            <li
                                key={type}
                                onClick={() => onSelectType(index) }
                                className={classNames({
                                    Active: activeType === index,
                                    Disabled: !types.includes(index)
                                })}
                            >
                                {type}
                            </li>
                        ))
                    }
                </ul>
                <ul>
                    {
                        availableSizes.map((size, index) => (
                            <li
                                key={size}
                                onClick={ ()=> onSelectSize(index)}
                                className={classNames({
                                    Active: activeSize === index,
                                    Disabled: !sizes.includes(size)    
                                })}
                            >
                                {size} см.
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='Pizza-block__bottom'>
                <div className='Pizza-block__price'>
                    от {price} ₽
                </div>
                <Button onClick={handlePizza}>
                    Добавить
                </Button>
            </div>
        </div>
    )
}

Pizzablock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.number.isRequired,
};

Pizzablock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
  };


export default Pizzablock
