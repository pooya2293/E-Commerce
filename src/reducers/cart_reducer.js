import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if(action.type === ADD_TO_CART){
    const {id,amount,color,product} = action.payload;
    const tempItem = state.cart.find((i)=> i.id === id + color);

    // if item already exist in te cart
    if(tempItem) {
      const tempCart = state.cart.map((cartItem)=>{
        if(cartItem.id === id + color){
          let newAmount = cartItem.amount + amount;
          if(newAmount > cartItem.max){
            window.alert('item that you whant bigger than the stock')
            newAmount = cartItem.max
          }
          return {...cartItem,amount: newAmount}
        }else{
          return cartItem
        }
      })
      return { ...state,cart:tempCart }
    
    // if item already do not exist in the cart
    }else{
      const newItem = {
        id: id + color,
        name:product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock
      }
      return {...state,cart:[...state.cart,newItem]}
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
