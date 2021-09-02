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

  if(action.type === REMOVE_CART_ITEM) {
    let tempCart = state.cart.filter((item)=>{
     return item.id !== action.payload 
    })
    return{ ...state,cart:tempCart }
  }

  if(action.type === CLEAR_CART){
    return { ...state ,cart:[] }
  }

  if(action.type === TOGGLE_CART_ITEM_AMOUNT){
    const {id,value} = action.payload;
    let tempCart = state.cart.map((item)=>{
      if(item.id === id){
        if(value === 'inc'){
          let newAmount = item.amount + 1
          if(newAmount > item.max){
            newAmount = item.max
          }
          return {...item,amount:newAmount}
        }else{
          let newAmount = item.amount - 1
          if(newAmount<1){
            newAmount = 1
          }
          return {...item,amount:newAmount}
        }
      }else {
        return item
      } 
    })
    
    return {...state,cart:tempCart}
  }

  if(action.type === COUNT_CART_TOTALS){
    const {total_items,total_amount} = state.cart.reduce((total,cartItem)=>{
      const {amount,price} = cartItem;

      total.total_items += amount
      total.total_amount += amount * price
      return total //* very important *
    },{
      total_items:0,
      total_amount:0
    })
    return { ...state, total_amount, total_items }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
