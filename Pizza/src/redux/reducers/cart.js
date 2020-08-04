const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
  };

  const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)
  const getTotalSum = (obj, key) => Object.keys(obj).reduce(
    (sum,key) => {
      const item = obj[key]
      const value = item.items.length + sum
      return sum
    },
    0
  );
  const cart = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PIZZA_CART':

        const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

        const newItems = {
          ...state.items,
            [action.payload.id]: {
              items: currentPizzaItems,
              totalPrice: getTotalPrice(currentPizzaItems)
            }
      };
      
      const totalCount = totalSum(newItems, 'items.length')
      const totalPrice = totalSum(newItems, 'totalPrice')
      
      
      return {
          ...state,
          items: newItems,
          totalCount,
          totalPrice,
        };
  
      case 'CLEAR_CART':

        return{
          ...state,
          items: [],
          totalPrice: 0,
          totalCount: 0,
        }

      case 'REMOVE_CART_ITEM':

        const newArr = {
          ...state.items
        }
        const currentTotalPrice = newArr[action.payload].totalPrice
        const currentTotalCount = newArr[action.payload].items.length
        delete newArr[action.payload]

        return{
          ...state,
          items: newArr,
          totalPrice: state.totalPrice - currentTotalPrice,
          totalCount: state.totalCount - currentTotalCount,
        }

      default:
        return state;
    }
  };
  
  export default cart;