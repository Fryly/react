import React from 'react';
import Categories from '../Component/Categories/Categories';
import Sort from '../Component/Sort/Sort';
import Pizzablock from '../Component/Pizzablock/Pizzablock';

import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'

import Loading from '../Component/Pizzablock/Loading';

import { featchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'

const categoryName = ["Мясные","Вегетарианская","Гриль","Острые","Закрытые"]
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
  ];

const Home = () => {

    const dispatch = useDispatch()
    const items = useSelector (({ pizzas }) => pizzas.items)
    const cartItems = useSelector (({ cart }) => cart.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const {category,sortBy} = useSelector(({ filters }) => filters);


    React.useEffect( () => {
        dispatch(featchPizzas(sortBy,category))
    },[category,sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    },[])

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    },[])

    const addPizzaCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }
    
    return (
        <div>
            <div className="Content__top">
                <Categories
                    activeCategory= {category}
                    onClickCategory = {onSelectCategory}
                    items={categoryName}
                />
                <Sort
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2>Все пиццы</h2>
            <div className="Content__pizza">
                { isLoaded
                    ? items.map((block) => (
                        <Pizzablock 
                        key={block.id} {...block} 
                        onClickAddPizza={addPizzaCart}/>
                    ))
                    : Array(12).fill(0)
                        .map(( _ ,index ) => (<Loading key={index} />)
                        ) 
                }
            </div>
        </div>
    )
}


export default Home