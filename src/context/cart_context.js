import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

// get localStorage
const getLocalStorage = ()=>{
  let tempCart = localStorage.getItem('cart')
  if(tempCart){
    return JSON.parse(tempCart)
  }else{
    return []
  }
}

const initialState = {
  cart:getLocalStorage(),
  total_items:0,
  total_amount:0,
  shipping_fee:534,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState);


  // add to cart
  const addToCart = (id,color,amount,product)=>{
    dispatch({ type:ADD_TO_CART ,payload:{id,color,amount,product} })
  }

  // remove item
  const removeItem = (id)=>{
    dispatch({ type:REMOVE_CART_ITEM,payload:id })
  }

  // toggle amount
  const toggleAmount = (id,value)=> {
    dispatch({ type:TOGGLE_CART_ITEM_AMOUNT,payload:{id,value} })
  }

  // clear cart
  const clearCart = ()=>{
    dispatch({ type:CLEAR_CART })
  }

  // calcute totale items
  const calcTotalItems = ()=>{
    let tempTotalAmount = 0;
    state.cart.map((item)=>{
      tempTotalAmount += item.amount
    })
    state.total_items = tempTotalAmount;
  }

  // cart total amount
  const cartTotals = ()=>{
    dispatch({ type:COUNT_CART_TOTALS })
  }

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(state.cart));
    calcTotalItems();
    cartTotals();
  },[state.cart , state.cart.amount])

  return (
    <CartContext.Provider value={{ ...state,addToCart,removeItem,toggleAmount,clearCart }}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
